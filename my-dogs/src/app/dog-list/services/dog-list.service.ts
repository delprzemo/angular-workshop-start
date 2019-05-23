import { Injectable } from '@angular/core';
import { DogItem } from '../models/dog-item';

@Injectable()
export class DogListService {
  data: DogItem[];

  constructor() { }

  getDogList() {
    return this.data;
  }

  buildDogList() {
    this.data = [{
      id: 1,
      name: 'York',
      description: 'Yorks are very friendly dogs',
      image: 'https://c8.alamy.com/comp/JWWEFR/york-terrier-taking-a-bath-funny-wet-dog-JWWEFR.jpg'
    },
    {
      id: 2,
      name: 'German Shepard',
      description: 'German Shepard are very unfriendly dogs',
      image: 'https://i.ebayimg.com/images/g/lGYAAMXQNo5Taknl/s-l300.jpg'
    },
    {
      id: 3,
      name: 'Bulldog',
      description: 'Bulldog are very lazy dogs',
      image: 'https://i.ytimg.com/vi/ksEliwKxS-Y/hqdefault.jpg'
    },
    {
      id: 4,
      name: 'Lassie',
      description: 'Lessie are very old dogs',
      image: 'https://i.pinimg.com/736x/4d/c2/79/4dc279f7ad7fce4fc9ac65c4ed831bfd.jpg'
    }]
  }
}
