import React from 'react';
import shopData from './shopData';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection'
class ShopPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections: shopData
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
              <PreviewCollection key={id} {...otherCollectionProps} />
            ))}
          </div>
        )
    }
}

export default ShopPage;