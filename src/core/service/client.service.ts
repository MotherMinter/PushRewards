import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account, Client, Company } from '../entity';
import { Repository } from 'typeorm';
import { AccountDto, ClientDto, CompanyDto } from '../dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {
  }

  async create(clientData: ClientDto): Promise<Client> {
    try {
      const client = new Client();
      client.email = clientData.email;
      client.password = clientData.password;

      await this.clientRepository.save(client);

      return client;
    } catch (error) {
      global.console.error({ error, data: clientData });
      throw new HttpException('Fail to create new client', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(client: Client, clientData: ClientDto): Promise<Client> {
    try {
      await this.clientRepository.save(client);

      return client;
    } catch (error) {
      global.console.error({ error, data: clientData });
      throw new HttpException('Fail to update client', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async get(email: string): Promise<Client> {
    try {
      return await this.clientRepository.findOneOrFail(
        {
          email,
        }, { relations: ['companies'] });
    } catch (error) {
      // not found
      return null;
    }
  }

  async login(email: string, passwordHash: string): Promise<Client> {
    let client;
    try {
      client = await this.clientRepository.findOneOrFail(
        {
          email,
          password: passwordHash,
        }, { relations: ['companies'] });
    } catch (error) {
      // global.console.error('error get client', email);
      throw new HttpException('Bad password', HttpStatus.UNAUTHORIZED);
    }

    return client;
  }
}
