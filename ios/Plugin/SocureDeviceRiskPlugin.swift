import Foundation
import Capacitor
import DeviceRisk 

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SocureDeviceRiskPlugin)
public class SocureDeviceRiskPlugin: CAPPlugin {
    private let implementation = SocureDeviceRisk()
    let deviceRiskManager = DeviceRiskManager.sharedInstance
    let socurePublicKey = "test"

    // TODO save user defaults 
    // https://github.com/socure-inc/socure-sigmadevice-sdk-ios/blob/main/SampleApp/SampleApp/ViewController.swift

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    // Set Tracker 
    @objc func setTracker(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        let uuid = "alim"
        deviceRiskManager.setTracker(key: socurePublicKey, sources:  [.device, .network, .accessibility, .locale, .advertising, .accelerometer,.magnetometer,.motion, .pedometer, .location], existingUUID: uuid)
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    // Send Data
    @objc func sendData(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        deviceRiskManager.sendData(context: .homepage)
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
}
