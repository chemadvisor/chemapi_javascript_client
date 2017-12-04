# ChemadvisorChemApi.ReleasesApi

All URIs are relative to *https://sandbox.chemadvisor.io/chem/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReleases**](ReleasesApi.md#getReleases) | **GET** /releases | All Releases


<a name="getReleases"></a>
# **getReleases**
> Releases getReleases(opts)

All Releases

A paginated collection of Releases

### Example
```javascript
var ChemadvisorChemApi = require('chemadvisor-chemApi');

var apiInstance = new ChemadvisorChemApi.ReleasesApi();

var opts = { 
  'limit': 10, // Integer | Number of items to retrieve
  'offset': 0, // Integer | Offset of the first item returned
  'q': "q_example", // String | Search filter is based on the syntax used for find in mongoDB.  For more information, visit <a href=\"https://developer.chemadvisor.io/docs/integrate/codeExamplesQ\" target=\"blank\">https://developer.chemadvisor.io/docs/integrate/codeExamplesQ</a>.
  'appKey': "appKey_example", // String | 
  'appId': "appId_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReleases(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Integer**| Number of items to retrieve | [optional] [default to 10]
 **offset** | **Integer**| Offset of the first item returned | [optional] [default to 0]
 **q** | **String**| Search filter is based on the syntax used for find in mongoDB.  For more information, visit &lt;a href&#x3D;\&quot;https://developer.chemadvisor.io/docs/integrate/codeExamplesQ\&quot; target&#x3D;\&quot;blank\&quot;&gt;https://developer.chemadvisor.io/docs/integrate/codeExamplesQ&lt;/a&gt;. | [optional] 
 **appKey** | **String**|  | [optional] 
 **appId** | **String**|  | [optional] 

### Return type

[**Releases**](Releases.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

