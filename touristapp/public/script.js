// image arrays
let taj = [
    "https://source.unsplash.com/400x250/?tajmahal",
    "https://source.unsplash.com/400x250/?agra",
    "https://source.unsplash.com/400x250/?tajmahal,india"
  ];
  
  let jaipur = [
    "https://source.unsplash.com/400x250/?jaipur",
    "https://source.unsplash.com/400x250/?hawa-mahal",
    "https://source.unsplash.com/400x250/?amber-fort"
  ];
  
  let goa = [
    "https://source.unsplash.com/400x250/?goa,beach",
    "https://source.unsplash.com/400x250/?goa,nightlife",
    "https://source.unsplash.com/400x250/?goa,resort"
  ];
  
  let kerala = [
    "https://source.unsplash.com/400x250/?kerala,backwaters",
    "https://source.unsplash.com/400x250/?kerala,houseboat",
    "https://source.unsplash.com/400x250/?kerala,nature"
  ];
  
  // index tracker
  let index = { img1:0, img2:0, img3:0, img4:0 };
  
  function next(id, arr) {
    index[id] = (index[id] + 1) % arr.length;
    document.getElementById(id).src = arr[index[id]];
  }
  
  function prev(id, arr) {
    index[id] = (index[id] - 1 + arr.length) % arr.length;
    document.getElementById(id).src = arr[index[id]];
  }