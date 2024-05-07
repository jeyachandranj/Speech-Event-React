import delegate from 'delegate-it';
export type Unsubscribe = {
    destroy: () => void;
};
export declare const delegateEvent: <Selector extends string, TEvent extends keyof GlobalEventHandlersEventMap>(selector: Selector, type: TEvent, callback: delegate.EventHandler<GlobalEventHandlersEventMap[TEvent], Element>, { base, ...eventOptions }?: {
    base?: Document | undefined;
}) => Unsubscribe;
