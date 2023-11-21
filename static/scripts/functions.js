/**
 * DOCU: Contains Useful Static Functions
 * Author: Arjhay Frias
 * Contact: arjhay.frias@thecollective.ph
 * Created At: 05-11-2023
 * Updated At: 05-12-2023
 */
class Functions {
  constructor() {
    this.is_buffer_open = false;
    this.buffer_timer;
  }

  /**
   * DOCU: Get Current Path Name
   * @returns {string}
   */
  static getCurrentPath() {
    return window.location.pathname.split('/')[1];
  }

  /**
   * DOCU: Get Current Scroll Height
   * @returns {number}
   */
  static getCurrentScrollHeight() {
    return $(window).scrollTop();
  }

  /**
   * DOCU: Get Current Screen Width
   * @returns {number}
   */
  static getScreenWidth() {
    return $(window).width();
  }

  /**
   * DOCU: Get Announcement Bar Height
   * @returns {number}
   */
  static getAnnouncementBarHeight() {
    return $('#announcement_bar').outerHeight();
  }

  /**
   * DOCU: Get Navigation Bar Height
   * @returns {number}
   */
  static getNavigationBarHeight() {
    const ANNOUNCEMENT_BAR_HEIGHT = $('#announcement_bar').outerHeight();
    const MAIN_NAVIGATION_BAR_HEIGHT = $('nav').outerHeight();

    return MAIN_NAVIGATION_BAR_HEIGHT + ANNOUNCEMENT_BAR_HEIGHT;
  }

  /**
   * DOCU: On Hover Element with Title, Add Title Text 
   */  
  onHoverTitle() {
    $('[title]').hover(function(e){ // Mouse Over
      const TITLE_TEXT = $(this).attr('title');
      
      $(this).data('tiptext', TITLE_TEXT).removeAttr('title');
      $('<p class="tooltip"></p>').text(TITLE_TEXT).appendTo('body').fadeIn(300);
    }, function(){ // Mouse Out
      $(this).attr('title', $(this).data('tiptext'));
      $('.tooltip').remove();
    }).mousemove(function(e){ // Mouse Over the Text 
      $('.tooltip').css('top', (e.pageY + 20) + 'px').css('left', (e.pageX + 10) + 'px');
    });
  }

  /**
   * DOCU: Get Current Currency
   * @returns {string}
   */
  static getCurrency() {
    return $('#cart_total_price').text()[0];
  }

  /**
   * DOCU: Initialize Buffer Timer 
   */
  initBuffer() {
		HEAD_CONTROLLER.navigation_bar.current_height = $(window).scrollTop();
		$('#loading_mask, #loading_animation').show();

		this.is_buffer_open = true;
		clearTimeout(this.buffer_timer);
		
		this.buffer_timer = setTimeout(function() { 
			if(this.is_buffer_open) {
				this.is_buffer_open = false;
				$('#loading_mask, #loading_animation').hide();
			}
		}, 5000);
	}

  /**
   * DOCU: On Create Item Create Confirmation Box Item, hide after 5s
   */
  onCreateConfirmationBoxItem() {
    $('#confirmation_box').on('DOMNodeInserted', '.item[attached="false"]', function(item){
      $(item.target).attr('attached', 'true').delay(5000).hide(600);
    });
  }

  /**
   * DOCU: On Confirmation Box Clicked, hide
   */
  onConfirmationBoxClicked() {
    $(document).on('click', '#confirmation_box .item', function(e) {
      $('#confirmation_box .item').hide();
    });
  }

  /**
   * DOCU: On Geolocation Initialized, Cut and Insert on Navigation Bar
   */
  onCreateGeoLocation() {
    $('body').on('DOMNodeInserted', '.locale-selectors__container', function () {
      $('#currency_selector_container').html($('form[action="/localization"]'));
      $('form[action="/localization"] select').removeClass("locale-selectors__selector");
      
      // Trim Down String
      $('#currency_selector_container').find('option').each(function() {
        const INDEX = $(this).text().indexOf("(") + 1;
        const TEXT = $(this).text().slice(INDEX, -2);
        $(this).text(TEXT);

        if($(this).val() == 'US' || $(this).val() == 'PH') {
          $('#country_code > option[value="'+ Shopify.currency.active.slice(0, -1) +'"]').prop("selected", true).trigger("change");    
        } else {
          $(this).remove();
        }
      });
      // $('#currency_selector_container').append
      $('<option/>').text('PHP').appendTo('form[action="/localization"] select');

      $('form[action="/localization"] select').change(function(e) {
        window.location.href = "https://thecollective.ph";
      })
    });
  }

  /**
   * DOCU: Initialize Sal Animation
   */
  initSal() {
    const SCROLL_ANIMATIONS = sal({ threshold: 0.1 });

    if(screen.width < 768) {
      SCROLL_ANIMATIONS.disable();
    }

    addEventListener("resize", () => {
      if(screen.width < 768) {
        SCROLL_ANIMATIONS.disable();
      } else {
        SCROLL_ANIMATIONS.enable();
      }
    });
  }

  /**
   * DOCU: Validate Email Address
   */
  static isValidEmail(email) {
    const emailFilter = /^([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;

    return (emailFilter.test(email)) ? true : false;
  }

  /**
   * DOCU: on Successfull Newsletter Subscription, Display Confirmation Message
   */
  onSuccessfullNewsletter() {
    const URL_PARAMS = new URLSearchParams(window.location.search);
    const NEW_URL = location.href.split("?")[0];

    if(URL_PARAMS.get('customer_posted')) {
      HEAD_CONTROLLER.analytics.sendLeadCreated('newsletter'); 
      $('#confirmation_box').prepend(`<div class="item" attached="false"><p><strong> 🎉 Congratulations! </strong> you have successfully <strong>subscribed</strong> to our newsletter!🎉 </p></div>`);
      window.history.pushState('object', document.title, NEW_URL);
    }
  }

  /**
   * DOCU: on Successfull Account Registration Subscription, Display Confirmation Message
   */
  onSuccessfullRegistration() { 
    const URL_PARAMS = new URLSearchParams(window.location.search);
    const NEW_URL = location.href.split("?")[0];

    if(!$('#gameball-customerID').val() && URL_PARAMS.get('new_registered')) {
      window.location.replace('/account/login/?forgot_password=true#recover');
    } else if(URL_PARAMS.get('new_registered')) {
      HEAD_CONTROLLER.analytics.sendLeadCreated('register');      
      $('#confirmation_box').prepend(`<div class="item" attached="false"><p><strong> 🎉 Congratulations! </strong> you have successfully <strong>registered</strong> an account!🎉 </p></div>`);
      window.history.pushState('object', document.title, NEW_URL);
    }

    if(URL_PARAMS.get('forgot_password')) {
      $('#confirmation_box').prepend(`<div class="item" attached="false"><p>⚠️ <strong>You already have an account</strong> associated with your email, If you forget the password please <strong>reset</strong> it! ⚠️</p></div>`);
    }
  }

  onSearchBarInitialized() {
    
  }

  static addParams(key, value) {
    const QUERY_PARAMS = new URLSearchParams(window.location.search);

    QUERY_PARAMS.set(key, value);
    history.replaceState(null, null, "?" + QUERY_PARAMS.toString());
  }

  static getURLPararams() {
    return new URLSearchParams(window.location.search);
  }

  static getBaseUrl() {
    return window.location.origin;
  }

  static getHandle() {
    return window.location.pathname.split("/")[2];
  }

  static getTextString() {
    const URL_PARAMS = Functions.getURLPararams();

    if(!URL_PARAMS.get('search')) {
      return '';
    }

    return URL_PARAMS.get('search');
  }

  static getSortKey() {
    const URL_PARAMS = Functions.getURLPararams();

    if(!URL_PARAMS.get('sort')) {
      return 'RELEVANCE';
    }

    return URL_PARAMS.get('sort').toUpperCase();
  }

  static updateRangeSlider(lowest_price, highest_price) {
    const RANGE_SLIDER = document.getElementById('slider-range');

    RANGE_SLIDER.noUiSlider.destroy()

    const moneyFormat = wNumb({
      decimals: 0,
      thousand: '',
      prefix: ''
    });
    
    noUiSlider.create(RANGE_SLIDER, {
      start: [lowest_price, highest_price],
      range: {
        'min': [lowest_price],
        'max': [highest_price],
      },
      step: 5,
      format: moneyFormat,
      connect: true
    });

    RANGE_SLIDER.noUiSlider.on('update', function(values, handle) {
      document.getElementById('slider-range-value1').innerHTML = '$' + values[0];
      document.getElementById('slider-range-value2').innerHTML = '$' + values[1];
      document.getElementsByName('min-value').value = moneyFormat.from('$' + values[0]);
      document.getElementsByName('max-value').value = moneyFormat.from('$' + values[1]);
      Functions.updateProductList(Functions.getFilteredProductsBasedOnPrice(HEAD_CONTROLLER.api.product_list, values[0], values[1]));
    });
  }

  static getFilteredProductsBasedOnPrice(product_list, lowest_price, highest_price) {
    if(!product_list) {
      return [];
    }
    
    let product_list_filtered_min_max_price = product_list.filter(function (product) {
      return Math.floor(product.priceRange.minVariantPrice.amount) >= lowest_price && Math.ceil(product.priceRange.maxVariantPrice.amount) <= highest_price;
    });

    return product_list_filtered_min_max_price;
  }


  static updateProductList(product_list) {
    let html_string = '';
    console.log(product_list);

    product_list.forEach((product) => {
      html_string += ` 
        <a href="/product/${ product.id }" class="item">
          <div class="img_container">
            <img src="${ product.image_url }" class="img1" loading="eager" width="200" height="267" />
          </div>
          <span class="vendor_name">${ product.vendor }</span>
          <span class="product_name">${ product.name }</span>
          
          ${ (product.discounted_price == product.unit_price ) ? `<span class="product_price">₱${ product.discounted_price }</span>` : `<span class="product_price">₱${ product.discounted_price }</span> <span class="product_price slashed">₱${ product.unit_price }</span> <span class="sale_tag">SALE</span>` }
          <span class="ratings">${ ((parseFloat(product.rating) / 2) * 10).toFixed(1) } stars</span>
        </a>
      `
    });

    if(!html_string.length) {
      html_string = '<p style="text-align: center; margin-top: 20px">Sorry, no products matched your selection</p>';
    }
    $('#item_container').html(html_string);
    $('#collection_label .top > p').text(`${ product_list.length } products`);
  }

  static updateNavigationBarProductList(product_list) {
    let html_string = '';
    let add_view_more = false;
    
    if(product_list.length > 5) {
      add_view_more = true;
    }

    product_list.slice(0, 5).forEach((product) => {
      let current_or_first_available_variant;
      let add_to_cart_icon = '';
      let sale = '';
      let product_price = (+product.priceRange.minVariantPrice.amount).toFixed(2);
      let small_image1 = '';

      if(product.images.nodes[0]) {
        small_image1 = product.images.nodes[0].url;
      }

      product.variants.nodes.forEach((variant) => {
        if(variant.availableForSale) {
          add_to_cart_icon = `
          <svg class="add_to_cart_icon" product-title="${ product.title }" small-image-url="${ small_image1 }"  serialized-data="product_id=${ product.id.split('/')[4] }&id=${ variant.id.split('/')[4] }&quantity=1" width="40" height="40" viewBox="0 0 40 40"><g id="boost-pfs-icon-cart"width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style=" transform: scale(1.5);" d="M23.9955 25.2744L21.888 6.35967C21.8437 5.9637 21.4896 5.66303 21.0671 5.66303H17.1059V4.81187C17.1059 2.1587 14.8153 0 12.0001 0C9.18467 0 6.89412 2.1587 6.89412 4.81187V5.66303H2.93288C2.5104 5.66303 2.15625 5.9637 2.11203 6.35967L0.00448081 25.2744C-0.0198485 25.4935 0.0556782 25.7122 0.21202 25.8761C0.368574 26.0398 0.591558 26.1333 0.825331 26.1333H23.1745C23.4084 26.1333 23.6314 26.0398 23.7878 25.8761C23.9445 25.7122 24.0198 25.4935 23.9955 25.2744ZM8.54471 4.81187C8.54471 3.01644 10.0948 1.55557 12.0001 1.55557C13.9052 1.55557 15.4553 3.01644 15.4553 4.81187V5.66303H8.54471V4.81187ZM1.74181 24.5778L3.67609 7.21861H6.89412V8.93269C6.89412 9.36216 7.26371 9.71048 7.71941 9.71048C8.17511 9.71048 8.54471 9.36216 8.54471 8.93269V7.21861H15.4553V8.93269C15.4553 9.36216 15.8249 9.71048 16.2806 9.71048C16.7363 9.71048 17.1059 9.36216 17.1059 8.93269V7.21861H20.3239L22.2582 24.5778H1.74181Z" fill="#0F0D0D"></path>
          </svg>`;
          current_or_first_available_variant = variant;
          return;
        }
      });

      if(product.compareAtPriceRange.minVariantPrice.amount > product.priceRange.minVariantPrice.amount) {
        sale = 
        `<span class="product_price slashed">$${ (+product.compareAtPriceRange.minVariantPrice.amount).toFixed(2) }</span>
        <span class="sale_tag">SALE</span>`;
      }

      if(current_or_first_available_variant) {
        product_price = (+current_or_first_available_variant.price.amount).toFixed(2);
      }
      
      html_string += ` 
        <div class="cart_item">
          <a href="/products/${ product.handle }">
            <img src="${ small_image1 }" alt="${ product.title }" loading="eager" width="100" height="auto">
            <div class="cart_item_details">
              <span class="cart_item_brand">${ product.vendor.toUpperCase() }</span>
              <span class="cart_item_product_name">${ product.title }</span>
              <span class="cart_item_price"><span class="money">$${ product_price }</span></span>
            </div>
          </a>
        </div>
      </a>
      `;
    });

    if(!html_string.length) {
      html_string = '<p style="text-align: center;">Sorry, no products matched</p> <a href="/collections/all" style="text-align: center; text-decoration: underline; width: 100%;">Browse our product list instead</a>';
    } else {
      html_string = "<h3>PRODUCTS</h3>" + html_string;
    }

    if(add_view_more) {
      html_string += `<a href="/collections/all?search=${ $('#nav_search').val() }" class="view_more_button">see more results</a>`;
    }

    $('.item_container').html(html_string);
  }

  static getFilteredProductsBasedOnSort(product_list) {
    if(!product_list) {
      return [];
    }
    const SORT_KEY = api.sortKey;

    if(SORT_KEY == 'highest_to_lowest' || SORT_KEY == 'z_to_a') {
      product_list.reverse();
    }

    return product_list;
  }

  static getStarReviews(product) {
    let star_reviews = '';

    if(product.metafields[1]) {
      star_reviews = `<div class="judge_me_star_reviews"> <span class="jdgm-prev-badge__stars" data-score="4.00" tabindex="0" aria-label="4.00 stars" role="button">`;
      let counter = 0;
      for(let i = 0; i < Math.floor(+(JSON.parse(product.metafields[0].value).value[0])); i++) {
        star_reviews += '<span class="jdgm-star jdgm--on"></span>';
        counter++;
      }

      if(Math.floor(JSON.parse(product.metafields[0].value).value[JSON.parse(product.metafields[0].value).value.length - 1])) {
        star_reviews += '<span class="jdgm-star jdgm--half"></span>';
        counter++;
      }

      if(counter != 5) {
        for(let i = 0; i < (5 - counter); i++) {
          star_reviews += '<span class="jdgm-star jdgm--off"></span>'
        }
      }
      
      star_reviews += `</span><span class="jdgm-prev-badge__text">${ product.metafields[1].value } reviews</span> 
      </div>`;
    }

    return star_reviews;
  }

  static getFilteredProductsBasedOnTags(product_list) {
    const TOOL_TYPE_FILTER = api.tool_type_filter;
    if(!product_list) {
      return [];
    }
    
    if(!TOOL_TYPE_FILTER.length) {
      return product_list;
    }

    product_list = product_list.filter((product) => {
      return product.tags.some((item) => TOOL_TYPE_FILTER.indexOf(item) >= 0);
    });
    
    return product_list;
  }
  
  static getFilteredProductsBasedOnCollections(product_list) {
    if(!product_list) {
      return [];
    }

    const HANDLE = Functions.getHandle();

    product_list = product_list.filter((product) => {
      let handles = product.collections.edges.map(function(handle) {
        return handle['node']['handle'];
      });
      
      return handles.includes(HANDLE);
    });

    return product_list;
  }

  static getFilteredProductsBasedOnAvailability(product_list) {
    if(!product_list) {
      return [];
    }

    product_list = product_list.filter((product) => {
      return product.availableForSale == true;
    });

    return product_list;
  }


  onDetectCountry() {
    if(Functions.getCookie("closed")) {
      return;
    } else if(Functions.getCookie("country") === "GB") {
      return;
    }
    
    if((Intl.DateTimeFormat().resolvedOptions().timeZone == "Asia/Manila") || (Intl.DateTimeFormat().resolvedOptions().timeZone == "Asia/Taipei")) {
      Functions.setCookie("country", "PH", 365);
      $('#loading_mask').show();
      $('#currency_popup').show();
    } else {
      Functions.setCookie("country", "GB", 365);
    }
    
    $('#currency_popup .close_button').click(() => {
      $('#loading_mask').hide();
      $('#currency_popup').hide();
      Functions.setCookie("closed", "true", 365);
    });
  }

  static setCookie(name, value, daysToLive) {
    let cookie = name + "=" + encodeURIComponent(value);
    
    if(typeof daysToLive === "number") {
      cookie += "; max-age=" + (daysToLive * 24 * 60 * 60);
      document.cookie = cookie;
    }
  }

  static getCookie(name) {
    let cookieArr = document.cookie.split(";");
    
    for(let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split("=");

      if(name == cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    
    return 0;
  }

}
