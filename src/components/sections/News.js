import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class News extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'news section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'news-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Our AI Powered Tools',
      paragraph: 'Elevate your photos with our AI photo editor, designed to enhance your images effortlessly.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require('./../../assets/images/Image Generator.jpg')}
                      alt="News 01"
                      width={344}
                      height={194} />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="https://cruip.com">Image Generator</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        Quickly convert your text into captivating AI-generated images with only a few words in seconds.
                      </p>
                    </div>
                    {/* <div className="news-item-more text-xs mb-8">
                      <a href="https://cruip.com">Read more</a>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require('./../../assets/images/Auto Enhancements.jpg')}
                      alt="News 02"
                      width={344}
                      height={194} />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="https://cruip.com">Auto Enhancements</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        Instantly improve photo quality with AI-powered adjustments for brightness, color, and contrast.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require('./../../assets/images/AI Retouching.jpg')}
                      alt="News 03"
                      width={344}
                      height={194} />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="https://cruip.com">AI Retouching</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        Smooth skin, remove blemishes, and adjust facial features with AI-powered retouching tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="600">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require('./../../assets/images/Object Removal.jpg')}
                      alt="News 02"
                      width={344}
                      height={194} />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="https://cruip.com">Object Removal</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        Eliminate unwanted objects or distractions from your photos with seamless AI object removal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="800">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require('./../../assets/images/Image Upscaling.jpg')}
                      alt="News 03"
                      width={344}
                      height={194} />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="https://cruip.com">Image Upscaling</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        Use AI technology to upscale low-resolution images without losing quality or introducing pixelation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="800">
                <div className="tiles-item-inner has-shadow">
                  <figure className="news-item-image m-0">
                    <Image
                      src={require('./../../assets/images/Background Removal.jpg')}
                      alt="News 03"
                      // width={344}
                      height={94} />
                  </figure>
                  <div className="news-item-content">
                    <div className="news-item-body">
                      <h3 className="news-item-title h4 mt-0 mb-8">
                        <a href="https://cruip.com">Background Removal</a>
                      </h3>
                      <p className="mb-16 text-sm">
                        Easily remove or replace backgrounds with AI precision, isolating subjects with clean edges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

News.propTypes = propTypes;
News.defaultProps = defaultProps;

export default News;