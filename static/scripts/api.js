class API {
  constructor() {
  }

  onSortItemsClicked() {
    $('#sort_items a').click(function(e) {
      e.preventDefault();    
      Functions.addParams('sort', $(this).attr('key'));
      api.sortKey = $(this).attr('sort-key');
      console.log()
      $('#current').text(api.sortKey.toUpperCase());
      api.getProducts();
    });
  }

  onToolTypeCheckboxClicked() {
    $('#tool_type input').click(function(e) {
      let tool_type_filter = [];

      $('#tool_type input').each(function() {        
        if($(this).prop('checked')) {
          tool_type_filter.push($(this).attr('type-id'));
        }
      })

      this.tool_type_filter = tool_type_filter;
      api.getProducts();
    });
  }
  
  onSearchInput() {
    const URL_PARAMS = Functions.getURLPararams(); 
    $('#search_container > #search').val(URL_PARAMS.get('search'));

    $(document).on('input', '#search_container > #search', function() {
      $('#nav_search').val($(this).val());
      Functions.addParams('search', $(this).val());
      api.getProducts();
    });
  }

  onNavSearchInput() {
    const URL_PARAMS = Functions.getURLPararams(); 
    $('#nav_search').val(URL_PARAMS.get('search'));

    $(document).on('input', '#nav_search', function() {
      $('#search_container > #search').val($(this).val());
      Functions.addParams('search', $(this).val());
      api.getProducts('navigation_bar');
    });
  }

  getProducts() {
    const STRING = Functions.getTextString();
    let sort_key = api.sortKey;
    // // const URL_PARAMS = Functions.getURLPararams();
    // let handle = Functions.getHandle();

    const DATA = {
      data: {
        string: STRING,
        sort_key: sort_key
      }
    };

    console.log(DATA);
    $.post("/search", DATA, data => {
      Functions.updateProductList(data);
    });

    // if(!STRING) {

    //   if(this.product_list.length) {
    //     const LOWEST_PRODUCT_PRICE = (this.product_list).reduce((min, product) => Math.floor(product.priceRange.minVariantPrice.amount) > Math.floor(min.priceRange.minVariantPrice.amount) ? min : product);
    //     const HIGHEST_PRODUCT_PRICE = (this.product_list).reduce((max, product) => Math.ceil(product.priceRange.maxVariantPrice.amount) < Math.ceil(max.priceRange.maxVariantPrice.amount) ? max : product);
    //     this.lowest_price = Math.floor(LOWEST_PRODUCT_PRICE.priceRange.minVariantPrice.amount);
    //     this.highest_price = Math.ceil(HIGHEST_PRODUCT_PRICE.priceRange.minVariantPrice.amount);
    //     this.product_list = Functions.getFilteredProductsBasedOnAvailability(this.product_list); 
    //     if(!(type == "navigation_bar")) {
    //       this.product_list = Functions.getFilteredProductsBasedOnTags(this.product_list); 
    //       this.product_list = Functions.getFilteredProductsBasedOnPrice(this.product_list, this.lowest_price, this.highest_price)
    //       this.product_list = Functions.getFilteredProductsBasedOnSort(this.product_list); 
    //       this.product_list = Functions.getFilteredProductsBasedOnCollections(this.product_list); 
    //       Functions.updateRangeSlider(Math.floor(this.lowest_price / 5) * 5, this.highest_price);
    //     }
    //   }

    //   if(Functions.getHandle() == 'all') {
    //     // Functions.updateProductList(this.product_list);
    //   }
    // }

  }
}