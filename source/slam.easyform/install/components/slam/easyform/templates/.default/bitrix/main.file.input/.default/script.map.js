{"version":3,"file":"script.min.js","sources":["script.js"],"names":["BX","window","repo","uploader","d","params","this","controller","controlId","button","editor","AvatarEditor","enableCamera","addCustomEvent","delegate","addFile","bind","click","init","template","message","replace","inputName","INPUT","e","debug","prototype","agent","Uploader","getInstance","id","CID","streams","uploadFormData","uploadMethod","uploadFileUrl","allowUpload","allowUploadExt","uploadMaxFilesize","showImage","sortItems","input","dropZone","parentNode","placeHolder","fields","thumb","tagName","fileEvents","onFileIsAttached","onFileIsAppended","onFileIsBound","onFileIsReadyToFrame","onUploadStart","onUploadProgress","onUploadDone","onUploadError","onUploadRestore","onAttachFiles","onQueueIsChanged","onFileIsInited","pack","t","mfi_mode","cid","moduleId","forceMd5","limits","mfi_sign","i","hasOwnProperty","post","data","size","length","ar1","ar2","name","values","findChildren","ii","findChild","attribute","data-bx-role","push","innerHTML","file_id","value","onAttach","inited","checkUploadControl","getItems","removeAttribute","setAttribute","files","error","n","deleteFile","getFirst","pop","acceptableL","onError","onCustomEvent","file","item","node","getItem","bindEventsHandlers","n1","proxy","parentCanvas","props","UploaderUtils","scaleImage","width","height","c","create","appendChild","getContext","drawImage","source","x","y","destin","canvas","PreventDefault","showFile","tmp_url","href","getAttribute","pointer","newInput","fileID","sessid","bitrix_sessid","ajax","v","nDelNameCompat","nDelName","indexOf","substr","type","node1","unbindAll","fileId","hash","fireEvent","_deleteFile","clear","addClass","progress","Math","min","__progressBarWidth","ceil","adjust","style","text","result","removeClass","html","ext","toDataURL","toLowerCase","getFormattedSize","RegExp","toUpperCase","justUploaded","remove","attr","specify","attrs","className","stream","pIndex","defaultErrorText","errorText","isArray","join","queue","items","MFInput","get"],"mappings":"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"}