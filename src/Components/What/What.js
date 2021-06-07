import './What.scss';
import Card from "../Card/Card";
import business from '../../images/business.png';
import digital from '../../images/Digital.png';
import technology from '../../images/Techology.png';

function What() {
    return (
        <section className="what what__margin">
            <div className='what__flex_one'>
                <h2 className='what__title'>What we do to help
                    our client grow in
                    digital era.</h2>
                <Card image={business} title={'Make Your business To Be Better Famous In Internet'}
                      subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                      'labore et dolore magna aliqua. '} name='two' />
            </div>
            <div className='what__flex_two'>
                <Card image={technology} title={'Bring Technology To Your Comfortable Home'}
                      subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                      'labore et dolore magna aliqua. '} name='one' />
                <Card image={digital} title={'Build Your Digital Product That Suitable For Your Need'}
                      subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                      'labore et dolore magna aliqua. '} name='three' />
            </div>
        </section>
    );
}

export default What;
