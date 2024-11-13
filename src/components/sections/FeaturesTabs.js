import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Tabs, { TabList, Tab, TabPanel } from './../elements/Tabs';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class FeaturesTabs extends React.Component {

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
      'features-tabs section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tabs-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Redefining Photo Editing with the Power of AI.',
      paragraph: 'Aipict is an AI-powered photo editor designed to enhance and transform your images with precision and ease.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Tabs active="tab-a">
              <TabList>
                <Tab tabId="tab-a">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/icon12-NAQTJSN.png')}
                      alt="Tab icon 01"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    AI-Powered
                  </div>
                </Tab>
                <Tab tabId="tab-b">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/icon07-NAQTJSN.png')}
                      alt="Tab icon 02"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Customization
                  </div>                  
                </Tab>
                <Tab tabId="tab-c">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/icon05-NAQTJSN.png')}
                      alt="Tab icon 03"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Time-Saving Features
                  </div>                  
                </Tab>
                <Tab tabId="tab-d">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/icon01-NAQTJSN.png')}
                      alt="Tab icon 04"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    User-Friendly
                  </div>
                </Tab>                
              </TabList>
              
              <Image
                  className="has-shadow"
                  src={require('./../../assets/images/Dashboard-Aipict-VDJSPSP.jpg')}
                  alt="Features tabs image 01"
                  width={896}
                  height={504} />
{/*                   
              <TabPanel id="tab-a">
                <Image
                  className="has-shadow"
                  src={require('./../../assets/images/Dashboard-Aipict-VDJSPSP.jpg')}
                  alt="Features tabs image 01"
                  width={896}
                  height={504} />
              </TabPanel>
              <TabPanel id="tab-b">
                <Image
                  className="has-shadow"
                  src={require('./../../assets/images/features-tabs-image.png')}
                  alt="Features tabs image 02"
                  width={896}
                  height={504} />
              </TabPanel>
              <TabPanel id="tab-c">
                <Image
                  className="has-shadow"
                  src={require('./../../assets/images/features-tabs-image.png')}
                  alt="Features tabs image 03"
                  width={896}
                  height={504} />
              </TabPanel>
              <TabPanel id="tab-d">
                <Image
                  className="has-shadow"
                  src={require('./../../assets/images/features-tabs-image.png')}
                  alt="Features tabs image 04"
                  width={896}
                  height={504} />
              </TabPanel>               */}
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTabs.propTypes = propTypes;
FeaturesTabs.defaultProps = defaultProps;

export default FeaturesTabs;