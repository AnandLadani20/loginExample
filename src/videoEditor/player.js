import etro from "etro";

export default class {
  constructor(el, options) {
    this.player = new etro.Movie({ canvas: el });
    this.defaults = {
      frameRate: 30,
      repeat: false,
      ...options
    };

    this.playerSelectors =
      options && options.selectors
        ? options.selectors
        : {
            recordButton: ".record",
            playButton: ".play",
            newLayer: ".playlist-add",
            modal: ".modal",
            preview: ".modal-preview",
            modalClose: ".modal-close",
            modalUploader: ".modal-file",
            modalAddLayer: ".modal-load",
            downloadLink: ".download"
          };

    this._addListeners();
  }

  play() {
    this.player.play();
  }

  record() {
    if (this.player.rendering) {
      this.player.stop();
    }

    this.player.record({ frameRate: this.defaults.frameRate }).then((blob) => {
      console.log("recorded", blob);

      this._generateDownloadFile(blob);
    });
  }

  _generateDownloadFile(blob) {
    const urlBlob = URL.createObjectURL(blob);
    const placeholder = document.createElement("video");
    const downloadLink = document.querySelector(
      this.playerSelectors.downloadLink
    );
    placeholder.src = blob;
    downloadLink.href = urlBlob;
    downloadLink.classList.add("is-visible");
    downloadLink.download = "recording";
  }

  _getLayerType(fileType) {
    if (!fileType) {
      return "Visual"; // basic
    }

    if (fileType.startsWith("image/")) {
      return "Image";
    }

    if (fileType.startsWith("video/")) {
      return "Video";
    }
  }

  _previewFile(e) {
    const file = e.target.files[0];
    const preview = document.querySelector(this.playerSelectors.preview);

    // Clean up existing previewed items
    preview.querySelectorAll("*").forEach((element) => {
      element.remove();
    });

    if (!file) {
      return;
    }

    let item;
    if (file.type.startsWith("image/")) {
      item = document.createElement("img");
      item.classList.add("obj");
      item.file = file;
      preview.appendChild(item);
    } else if (file.type.startsWith("video/")) {
      item = document.createElement("video");
      item.classList.add("obj");
      item.controls = true;
      item.file = file;
      preview.appendChild(item);
    }

    const reader = new FileReader();
    reader.onload = (function (uploadedMedia) {
      return function (e) {
        uploadedMedia.src = e.target.result;
      };
    })(item);
    reader.readAsDataURL(file);
  }

  _toggleModal(e) {
    e && e.preventDefault();
    const modal = document.querySelector(this.playerSelectors.modal);
    if (!modal) {
      return;
    }

    const action = modal.classList.contains("is-visible") ? "remove" : "add";

    modal.classList[action]("is-visible");
  }

  addLayer(e) {
    e.preventDefault();
    const file = document.querySelector(this.playerSelectors.modalUploader)
      .files[0];

    if (!file) {
      return;
    }

    const layerType = this._getLayerType(file.type);
    const previewer = document.querySelector(this.playerSelectors.preview);
    const source = previewer.querySelector(
      layerType === "Image" ? "img" : "video"
    );

    const layerOpts =
      layerType === "Image"
        ? { startTime: 0, duration: 3, source }
        : { startTime: 0, source };
    const layer = new etro.layer[layerType](layerOpts);
    this.player.layers.push(layer);

    this._toggleModal();
  }

  _addListeners() {
    document
      .querySelector(this.playerSelectors.playButton)
      .addEventListener("click", (e) => this.play());

    document
      .querySelector(this.playerSelectors.recordButton)
      .addEventListener("click", (e) => this.record());

    document
      .querySelector(this.playerSelectors.newLayer)
      .addEventListener("click", (e) => this._toggleModal(e));

    document
      .querySelector(this.playerSelectors.modalClose)
      .addEventListener("click", (e) => this._toggleModal(e));

    document
      .querySelector(this.playerSelectors.modalAddLayer)
      .addEventListener("click", (e) => this.addLayer(e));

    document
      .querySelector(this.playerSelectors.modalUploader)
      .addEventListener("change", (e) => this._previewFile(e));
  }
}
