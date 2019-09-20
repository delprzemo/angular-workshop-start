import { Injectable } from '@angular/core';
import { DogItem } from '../models/dog-item';
import { Observable } from 'rxjs';
import { MockedHttpService } from 'src/app/utils/mocked-http.service';

@Injectable()

export class DogListService {
  public dogs: DogItem[];

  constructor(private mockedHttpService: MockedHttpService) { }

  buildDogList() {
    this.dogs = [];
    this.dogs.push(new DogItem(1, 'York', 'Yorks are very friendly dogs',
      'https://c8.alamy.com/comp/JWWEFR/york-terrier-taking-a-bath-funny-wet-dog-JWWEFR.jpg'));
    this.dogs.push(new DogItem(2, 'German Shepard', 'German Shepard are very unfriendly dogs',
      'https://i.ebayimg.com/images/g/lGYAAMXQNo5Taknl/s-l300.jpg'));
    this.dogs.push(new DogItem(3, 'Bulldog', 'Bulldog are very lazy dogs',
      'https://i.ytimg.com/vi/ksEliwKxS-Y/hqdefault.jpg'));
    this.dogs.push(new DogItem(4, 'Lassie', 'Lessie are very old dogs',
      'https://i.pinimg.com/736x/4d/c2/79/4dc279f7ad7fce4fc9ac65c4ed831bfd.jpg'));
  }

  removeDog(id: number) {
    this.dogs = this.dogs.filter(x => x.id !== id);
  }

  addDog(dog: DogItem) {
    dog.id = Math.max.apply(Math, this.dogs.map((o) => o.id)) + 1;
    this.dogs.push(dog);
  }

  getDogsAsync(): Observable<DogItem[]> {
    return this.mockedHttpService.getDataAsync(this.dogs);
  }

}