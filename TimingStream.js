import stream from "stream"

export default class TimingStream extends stream.Writable {
	_write(data, encoding, next) {
		if (!this.firedFirstByte && data.length > 0) {
			this.firedFirstByte = true;
			this.emit("start");
			// no need to emit "finish" explicitly; that is part of stream.Writable
		}
		next();
	}
}
