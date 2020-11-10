import {TsrUnpackMethod} from "./tsr-unpack-method";
import {TsrReplaceObservable} from "./tsr-replace-observable";

export type TsrMockerRefValues<CLASS_TYPE> = Partial<{
  [k in keyof CLASS_TYPE]: TsrReplaceObservable<TsrUnpackMethod<CLASS_TYPE[k]>>;
}>;
