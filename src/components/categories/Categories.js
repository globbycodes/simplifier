import React from 'react';
import ReactSVG from 'react-svg'
import '../../styles/categories.css';
import { categories } from './data/categoriesData';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Categories() {
    return (
        <div className="container">
            <div className="row">
                {
                    Object.keys(categories).map(item => {
                        return (
                            <div key={item} className="col-md-4 item">
                                <ReactSVG
                                    src={categories[item].svg}
                                    {...categories[item].styles}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}