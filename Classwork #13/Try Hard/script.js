class myPromise {
    constructor(callback, parent = null) {
        this.status = 'pending';
        this.promiseQueue = [];
        this.handlerQueue = [];
        this.parent = parent;

        this.resolve = this.resolve.bind(this);
        this.reject = this.reject.bind(this);
        this.handleResolve = this.handleResolve.bind(this);
        this.handleReject = this.handleReject.bind(this);

        if (this.parent) {
            this.cb = function (data) {
                try {
                    this.resolve(callback(data));
                } catch {
                    this.reject(callback(data));
                }
            };
        } else {
            callback(this.resolve, this.reject);
        }
    }
    resolve(value) {
        this.status = 'fulfill';
        this._data = value;
        setTimeout(this.handleResolve, 0);
    }
    reject(value) {
        this.status = 'rejected';
        this._data = value;
        setTimeout(this.handleReject, 0);
    }
    then(cb) {
        let next = new myPromise(cb, this);
        this.promiseQueue.push(next);
        return next;
    }
    catch(cb) {
        if (this.status === 'rejected') {
            cb(this._data);
        }
        let handler = new myPromise(cb, this);
        this.handlerQueue.push(handler);

        return handler;
    }
    handleResolve() {
        for (let promise of this.promiseQueue) {
            promise.cb(this._data);
        }
    }
    handleReject() {
        let alone = !Boolean(
            this.handlerQueue.length + this.promiseQueue.length
        );
        for (let handler of this.handlerQueue) {
            handler.cb(this._data);
        }
        for (let promise of this.promiseQueue) {
            promise.reject(this._data);
        }
        if (alone) {
            throw new Error(this._data);
        }
    }
}
