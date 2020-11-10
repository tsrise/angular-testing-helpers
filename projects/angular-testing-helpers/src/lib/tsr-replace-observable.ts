import {BehaviorSubject, Observable, Subject} from 'rxjs';

/**
 * Extract the rxjs parent type but replace Observable by the Subject type
 * ```typescript
 * type A = TsrReplaceObservable<boolean>; // result: boolean
 * type B = TsrReplaceObservable<BehaviorSubject<string>>; // result: BehaviorSubject<string>
 * type C = TsrReplaceObservable<Subject<string>>; // result: Subject<string>
 * type D = TsrReplaceObservable<Observable<string>>; // result: Subject<string>
 * ```
 */
export type TsrReplaceObservable<T> =
  T extends BehaviorSubject<(infer G)> ? BehaviorSubject<G> :
    T extends Subject<(infer S)> ? Subject<S> :
      T extends Observable<(infer O)> ? Subject<O> :
        T;
