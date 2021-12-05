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
                } catch (e) {
                    this.reject(e);
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
    then(resolved, rejected = null) {
        let next = new myPromise(resolved, this);
        this.promiseQueue.push(next);

        if (typeof rejected !== 'function') {
            rejected = (data) => {
                throw new Error(data);
            };
        }
        this.catch(rejected);

        return next;
    }
    catch(cb) {
        if (this.status === 'rejected') {
            return new myPromise((rs, rj) => rs(cb()));
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
        let handled = Boolean(this.handlerQueue.length);
        for (let handler of this.handlerQueue) {
            handler.cb(this._data);
        }
        if (!handled) {
            throw new Error(this._data);
        }
    }
}
