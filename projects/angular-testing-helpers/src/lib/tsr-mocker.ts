import {TsrMockerRefValues} from "./tsr-mocker-ref-values";

export interface TsrMockerRef<CLASS_TYPE, PROP_TYPES = any> {
  /** name of the instance to mock (service name for example) */
  name: string;
  /** the class object reference of the class to mock */
  classRef: new(...args: any[]) => CLASS_TYPE;
  /** the mocker class corresponding to the class to mock */
  mocker: TsrMocker<CLASS_TYPE>;
  /** the mocked instance of the class to mock */
  mock: jasmine.SpyObj<CLASS_TYPE>;// | PROP_TYPES;
  /** mocked values returned by mocked methods.
   * can be observables: in that way, we can change the value later
   */
  values?: TsrMockerRefValues<CLASS_TYPE>;
}

export abstract class TsrMocker<CLASS_TYPE, PROP_TYPES = any> {
  abstract createRef(): TsrMockerRef<CLASS_TYPE, PROP_TYPES>;

  abstract create(): jasmine.SpyObj<CLASS_TYPE>;
}

