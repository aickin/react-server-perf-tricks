import stream from "stream"

export default class TimingStream extends stream.Writable {
	_write(data, encoding, next) {
		if (!this.firedFirstByte && data.length > 0) {
			this.firedFirstByte = true;
			this.emit("start");
		}
		next();
	}
}
