import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Button,
} from 'reactstrap';

const items = [
  {
    src: './images/kliniksuryacipta/Klinik-KTA-Surya-Cipta.jpg',
    altText: 'Slide 1',
    caption: 'Tampak Depan'
  },
  {
    src: './images/kliniksuryacipta/Klinik-KTA-Surya-Cipta-IGD.jpg',
    altText: 'Slide 2',
    caption: 'Tampak Depan'
  },
  {
    src: './images/kliniksuryacipta/Klinik-KTA-Surya-Cipta-Resepsionis.jpg',
    altText: 'Slide 3',
    caption: 'Ruang Tunggu'
  },
  {
    src: './images/kliniksuryacipta/Klinik-KTA-Surya-Cipta-Peresmian.jpg',
    altText: 'Slide 4',
    caption: 'Ruang Tunggu'
  },
  {
    src: './images/kliniksuryacipta/Klinik-KTA-Surya-Cipta-Poli.jpg',
    altText: 'Slide 5',
    caption: 'Meja Informasi'
  },
  {
    src: './images/kliniksuryacipta/Klinik-KTA-Surya-Cipta-Ruang-IGD.jpg',
    altText: 'Slide 6',
    caption: 'Ruang IGD'
  }
];

class KlinikKTASuryaCipta extends Component {
  constructor (props) {
    super (props);
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img style={{ width: '100%', height: '100px !important' }} src={item.src} alt={item.altText}/>
          {/* <CarouselCaption captionText={item.caption} /> */}
        </CarouselItem>
      )
    })
    return (
      <div>
        <br/>
        <Carousel style={{ width: '100%', height: '100px', overflow: 'hidden' }}
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
            {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        <Button style={{ fontSize: '14px' }} className="btnRedirectKlinik" size="lg" block>Klinik KTA Surya Cipta</Button>
      </div>
    );
  }
}

export default KlinikKTASuryaCipta;