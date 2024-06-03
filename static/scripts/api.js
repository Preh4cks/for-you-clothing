class API {
  constructor() {
    
  }

  onSortItemsClicked() {
    $('#sort_items a').click(function(e) {
      e.preventDefault();    
      Functions.addParams('sort', $(this).attr('key'));
      api.sortKey = $(this).attr('sort-key');
      $('#current').text(api.sortKey.toUpperCase());
      api.getProducts();
      api.updateRangeSlider();
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
      api.updateRangeSlider();
    });
  }
  
  onSearchInput() {
    const URL_PARAMS = Functions.getURLPararams(); 
    $('#search_container > #search').val(URL_PARAMS.get('search'));

    $(document).on('input', '#search_container > #search', function() {
      $('#nav_search').val($(this).val());
      Functions.addParams('search', $(this).val());
      api.getProducts();
      api.updateRangeSlider();
    });
  }

  onNavSearchInput() {
    const URL_PARAMS = Functions.getURLPararams(); 
    $('#nav_search').val(URL_PARAMS.get('search'));

    $(document).on('input', '#nav_search', function() {
      $('#search_container > #search').val($(this).val());
      Functions.addParams('search', $(this).val());
      api.getProducts('navigation_bar');
      api.updateRangeSlider();
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

    $.post("/search", DATA, data => {
      Functions.updateProductList(data);
      this.product_list = data;
      api.updateRangeSlider();
    });
  }

  updateRangeSlider() {
    // const LOWEST_PRODUCT_PRICE = this.product_list.reduce((min, product) => product.discounted_price > min ? min : product.discounted_price);
    // const HIGHEST_PRODUCT_PRICE = this.product_list.reduce((max, product) => product.discounted_price < max ? max : product.discounted_price);
    const LOWEST_PRODUCT_PRICE = this.product_list.reduce((min, product) => {
      return Math.min(min, product.discounted_price);
    }, Infinity); 
    const HIGHEST_PRODUCT_PRICE = this.product_list.reduce((max, product) => 
      Math.max(max, product.discounted_price), -Infinity
    );
    // console.log("---------------");
    // console.log(HIGHEST_PRODUCT_PRICE);
    // console.log(LOWEST_PRODUCT_PRICE);

    Functions.updateRangeSlider(Math.floor(LOWEST_PRODUCT_PRICE / 5) * 5, HIGHEST_PRODUCT_PRICE);
  }
}