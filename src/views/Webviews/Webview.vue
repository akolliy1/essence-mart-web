<template>
<div>
  <vue-iframe
    src="http://localhost:8080"
    sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock"
    allow="camera *; geolocation *; microphone *; autoplay *"
    frame-id="my-ifram"
    @load="onLoad"
    name="my-frame"
    width="100%"
    height="100vh"
  />
  <!-- <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock" src="http://localhost:8080/https://www.6pm.com/" style="border: 0; width:100%; height:1700px;overflow: hidden;"></iframe> -->
</div>
  <!-- <div id="testLoad"> -->
    <!-- <iframe is="x-frame-bypass" src="https://www.google.com/search?q=example"></iframe> -->

    <!-- <script src="https://unpkg.com/@ungap/custom-elements-builtin"></script>
    <script type="module" src="https://unpkg.com/x-frame-bypass"></script> -->
  <!-- <iframe src="https://youtube.com" is="x-frame-bypass" frameborder="0"></iframe> -->
  <!-- </div> -->
</template>

<script>
// import Jquery from 'jquery'
export default {
  name: 'MyIframe',
  mounted() {
    this.isLoading = true
    // fetch('http://localhost:8080/https://www.jumia.com.ng/', {mode:'cors'})
    // .then((response) => console.log('response.body.getReader()', response.body.getReader()))

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:8080/https://www.argos.co.uk/');
    xhr.onreadystatechange = handler;
    xhr.responseType = 'blob';
    xhr.setRequestHeader('Authorization', 'Bearer ' + 'token');
    xhr.setRequestHeader("some_custom_header", "foo");
    xhr.send();

    function handler() {
      if (this.readyState === this.DONE) {
        this.isLoading = false
        if (this.status === 200) {
          // this.response is a Blob, because we set responseType above
          var data_url = URL.createObjectURL(this.response);
          document.querySelector('#my-ifram').src = data_url;
        } else {
          console.error('no pdf :(');
        }
      }
    }

    // !(function ($) {
    //   $("#testLoad").load("http://localhost:8080/https://www.jumia.com.ng");
    // }(Jquery))
  },
  data: () => ({
    isLoading: true,
    myIframe: null
  }),
  methods: {
    onLoad(frame) {
      this.myIframe = frame.contentWindow
    }
  }
}
</script>