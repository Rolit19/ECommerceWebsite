import React from 'react';
import "../Products/CollectionTable.css"
import vedio1 from "../Assets/Vedios/vedio-1.mp4"
import vedio2 from "../Assets/Vedios/vedio-2.mp4"
import vedio3 from "../Assets/Vedios/vedio-3.mp4"
import vedio4 from "../Assets/Vedios/vedio-4.mp4"
import vedio5 from "../Assets/Vedios/vedio-5.mp4"
import vedio6 from "../Assets/Vedios/vedio-6.mp4"
import vedio7 from "../Assets/Vedios/vedio-7.mp4"
import vedio8 from "../Assets/Vedios/vedio-8.mp4"

const CollectionTable = () => {
    return (
      <div>
        <table className='collection-table'>
            <tbody>
                <tr>
                    <td className='collectiontable-cell'>
                        <video playsinline="playsinline" autoplay="true" loop="true" muted="true" src={vedio1} type="video/mp4" className='collection-vedio'/>
                        <p className='collection-text'>Hair Toppers</p>
                    </td>
                    <td className='collectiontable-cell'>
                        <video playsinline="playsinline" autoplay="true" loop="true" muted="true" src={vedio2} type="video/mp4" className='collection-vedio'/>
                        <p className='collection-text'>All Things Hair</p>
                    </td>
                    <td className='collectiontable-cell'>
                        <video playsinline="playsinline" autoplay="true" loop="true" muted="true" src={vedio3} type="video/mp4" className='collection-vedio'/>
                        <p className='collection-text'>Standouts</p>
                    </td>
                    <td className='collectiontable-cell'>
                        <video playsinline="playsinline" autoplay="true" loop="true" muted="true" src={vedio4} type="video/mp4" className='collection-vedio'/>
                        <p className='collection-text'>Clip In Bangs</p>
                    </td>
                </tr>
                <tr>
                    <td className='collectiontable-cell'>
                        <video playsinline="playsinline" autoplay="true" loop="true" muted="true" src={vedio5} type="video/mp4" className='collection-vedio'/>
                        <p className='collection-text'>Wigs</p>
                    </td>
                    <td className='collectiontable-cell'>
                        <video playsinline="playsinline" autoplay="true" loop="true" muted="true" src={vedio6} type="video/mp4" className='collection-vedio'/>
                        <p className='collection-text'>Hair Extensions</p>
                    </td>
                    <td className='collectiontable-cell'>
                        <video playsinline="playsinline" autoplay="true" loop="true" muted="true" src={vedio7} type="video/mp4" className='collection-vedio'/>
                        <p className='collection-text'>Accessories</p>
                    </td>
                    <td className='collectiontable-cell'>
                        <video playsinline="playsinline" autoplay="true" loop="true" muted="true" src={vedio8} type="video/mp4" className='collection-vedio'/>
                        <p className='collection-text'>Halo Hair</p>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }

export default CollectionTable;