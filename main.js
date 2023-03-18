import {dataProduct} from "./data.js";

const start = () => {
    const listProduct = document.getElementById('listProduct');
    let product = ''
    dataProduct.map((item, index) => {
        product += ` <div class="developer__product-box">
                            <div class="developer__product-item">
                                <div class="developer__product-item-transition">
                                ${
                                    item.sale && item.sale > 0 
                                        ? 
                                        '<div class="developer__product-item-sale">' 
                                        + `${item.sale ? item.sale + "%" : ""} `
                                        + '</div>' 
                                        : ''
                                }
                                    
                                    <div class="developer__product-item-image">
                                        <img src="${item.imgUrl}" alt="image-1" />
                                        <div class="image_overlay"></div>
                                    </div>
                                    <div class="developer__product-action">
                                        <div class="developer__product-action-item">
                                            <a>
                                                <i class="bi bi-suit-heart"></i>
                                                <span>Thêm vào yêu thích</span>
                                            </a>
                                            <a>
                                                <i class="bi bi-eye"></i>
                                                <span>Xem chi tiết</span>
                                            </a>
                                            <a>
                                                <i class="bi bi-bag"></i>
                                                <span>Thêm vào giỏ hàng</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="developer__product-item-content">
                                    <div class="developer__product-item-details">
                                        <a title="${item.title}"><h3>${item.title}</h3></a>
                                        <p title="${item.description}">${item.description}</p>
                                         ${
                                            item.sale && item.sale > 0 
                                                ? '<span>' + '<span class="price-old">' + `${item.price}` + '</span>' + '<span class="price-new">' + `${item.price * (100 - item.sale) / 100} VNĐ` + '</span>' + '</span>' 
                                                : '<span>'+ `${item.price} VNĐ` +'</span>'
                                        
                                        }
                                    </div>
                                    <div class="btn__plus">
                                        <a>
                                            <i class="bi bi-plus-lg"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>`
    })
    listProduct.innerHTML = product;
}

start()