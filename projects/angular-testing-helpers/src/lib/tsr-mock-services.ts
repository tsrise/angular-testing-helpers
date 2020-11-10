import {TsrMockerRef} from "./tsr-mocker";

/**
 * https://github.com/ng-packagr/ng-packagr/issues/696
 */
// @dynamic
export class TsrMockServices {

  static provide(mockedServicesRef: { [serviceName: string]: TsrMockerRef<any> }) {
    return Object.keys(mockedServicesRef).map(name => {
      return {provide: mockedServicesRef[name].classRef, useValue: mockedServicesRef[name].mock};
    });
  }
}
