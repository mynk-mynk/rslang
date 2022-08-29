import { IObject } from '../../common/interfaces/IObject';

class AudiocallView {
  static draw(data: IObject<string>) {
    return `<div>Audiocall content with data: ${Object.values(data).join(' , ')}</div>`;
  }
}

export default AudiocallView;
