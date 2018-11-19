# corrently-iot-jquery

[![HitCount](http://hits.dwyl.io/energychain/corrently-iot-jquery.svg)](http://hits.dwyl.io/energychain/corrently-iot-jquery)
[![Join the chat at https://gitter.im/corrently/iot](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/corrently/iot)

JQuery Extension (Plugin) to bind IoT devices to a Corrently UI.

This JQuery extension will replace the html code of a DOM Element with values from an IoT Device. Purpose of this extension to jquery is to easy work with /things-values/ within a corrently based UI/dashboard.

## HTML - Install
Insert script tag after JQuery Include
```
<script src="https://unpkg.com/corrently-iot-jquery@latest/index.js"></script>
```

## IoT Data
### HTML - Code
```
  <span class="iot" data-iot="0x12345678" data-subscribe="20">-</span>
```

### Javascript - Code
```
$(document).ready(function() {
  $('.iot').iot();
});
```

#### HTML Attributes
`data-iot` set the device address

`data-subscribe` refresh value every x seconds

## Corrently Wallet Data
### HTML - Code
```
  <span class="account" data-account="0x12345678" data-field="totalConsumption">-</span>
```

### Javascript - Code
```
$(document).ready(function() {
  $('.account').account();
});
```

#### HTML Attributes
`data-account` set the wallet account

`data-field` field to set as given by Corrently API Endpoint (meteredconsumption, convertedSupply, generation, ...)


## Contributing
- https://corrently.io/
- https://gitter.im/corrently/Token
- https://corrently.de/
