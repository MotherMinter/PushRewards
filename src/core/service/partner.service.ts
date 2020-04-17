import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as nodeMailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PartnerService {
  constructor(
    private readonly configService: ConfigService,
  ) {
  }
  /**
   * biptophone.ru
   * send phone number -> get message with mxaddress -> return mxaddress
   * @param phone
   * @return string (empty or mxaddress if success)
   */
  async sendToPhone(phone: string): Promise<string> {
    try {
      const response = await axios.post('https://biptophone.ru/send.php', `phone=${phone}`);

      if (response.data.valid === 1) {
        // phone valid try get mx
        const result = response.data.message.match(/"wallet">(Mx[0-9abcdef]+)<\//);
        if (result) {
          const mxaddress = result[1];
          global.console.info(`New phone ${phone} - ${mxaddress}`);

          return mxaddress;
        }
      }
    } catch (error) {
      global.console.error(error);
    }
    return '';
  }

  async sendEmail(email) {
    try {
      const emailHost = this.configService.get<string>('EMAIL_HOST');
      const emailPort = this.configService.get<string>('EMAIL_PORT');
      const emailuser = this.configService.get<string>('EMAIL_USER');
      const emailpass = this.configService.get<string>('EMAIL_PASS');
      const emailfrom = this.configService.get<string>('EMAIL_FROM');
      email.from = emailfrom;

      const transporter = nodeMailer.createTransport({
        host: emailHost,
        port: emailPort,
        secure: false,  // true for 465 port, false for other ports
        auth: {
          user: emailuser,
          pass: emailpass,
        },
      });

      transporter.sendMail(email, (error, info) => {
        if (error) {
          global.console.error(error);
        } else {
          global.console.info(email);
        }
      });
    } catch (error) {
      global.console.error(error);
    }
  }
}
