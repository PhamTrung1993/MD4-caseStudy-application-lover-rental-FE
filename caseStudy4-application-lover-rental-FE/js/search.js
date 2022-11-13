function rent4Male(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/provider/rent4Male",
        success: function (data){
            showAllProvider(data)
        }
    })
}
function showAllProvider(lists){
    let res = "";
    for (let i = 0; i < lists.length; i++) {
        let provider = lists[i];
        let services = ""
        for (let j = 0; j < )
        res +=  `<li className="item">
            <div className="col-item">
                <div className="product-image"><a href="#" title="Sample Product"> <img
                    className="small-image" src="    " alt="HTC Rhyme Sense"> </a></div>
                <div className="product-shop">
                    <h2 className="product-name"><a title=" Sample Product" href="#"> ${provider.name} </a></h2>
                    <div className="price-box">
      
                        <p className="special-price"><span className="price-label"></span> <span id="product-price-212"
                                                                                                 className="price"> $50 </span>
                        </p>
                    </div>
                    <div className="ratings">
                        <div className="rating-box">
                            <div style="width:50%" className="rating"></div>
                        </div>
                        <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a
                            href="#review-form">Add Your Review</a></p>
                    </div>
                    <div><tr>Gender: ${provider.gender}</tr>
                    <tr>Nationality: ${provider.nationality}</tr>
                    <tr>City: ${provider.city}</tr>
                     <tr>View : ${provider.view}</tr>
                     <tr>facbook : ${provider.facebook}</tr>
                     
                        </div>
                    <div className="desc std">
                 </div>
                    <div className="actions">
                        <button className="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Add to Cart</span>
                        </button>
                        <span className="add-to-links"> <a title="Add to Wishlist" className="button link-wishlist"
                                                           href="wishlist.html"><span>Add to Wishlist</span></a> <a
                            title="Add to Compare" className="button link-compare"
                            href="compare.html"><span>Add to Compare</span></a> </span></div>
                </div>
            </div>
        </li>`;

    }
    document.getElementById("products-list").innerHTML = res  ;
}

function rent8FeMale(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/provider/rent8Female",
        success: function (data){
            showAllProvider(data)
        }
    })
}
