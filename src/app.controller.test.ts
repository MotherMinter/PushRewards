import * as app_controller from "./app.controller"
import * as app_service from "./app.service"

// @ponicode
describe("index", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new app_service.AppService()
        inst2 = new app_controller.AppController(inst)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst2.index()
        }
    
        expect(callFunction).not.toThrow()
    })
})
