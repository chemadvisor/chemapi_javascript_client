# ChemadvisorChemApi.UpdatesApi

All URIs are relative to *https://sandbox.chemadvisor.io/chem/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEntryUpdate**](UpdatesApi.md#getEntryUpdate) | **GET** /updates_since/{release_id}/entry_changes/{substance_id} | Get Specific Regulatory Data Updates that were released after release_id
[**getListUpdates**](UpdatesApi.md#getListUpdates) | **GET** /updates_since/{release_id}/regulatory_list_changes | Get All List additions and removals released after release_id


<a name="getEntryUpdate"></a>
# **getEntryUpdate**
> EntryChanges getEntryUpdate(releaseId, substanceId, opts)

Get Specific Regulatory Data Updates that were released after release_id

Returns an **EntryChanges** collection. 

### Example
```javascript
var ChemadvisorChemApi = require('chemadvisor-chemApi');

var apiInstance = new ChemadvisorChemApi.UpdatesApi();

var releaseId = "releaseId_example"; // String | Release ID

var substanceId = "substanceId_example"; // String | Substance ID

var opts = { 
  'limit': 10, // Integer | Number of items to retrieve
  'offset': 0, // Integer | Offset of the first item returned
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
apiInstance.getEntryUpdate(releaseId, substanceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **releaseId** | **String**| Release ID | 
 **substanceId** | **String**| Substance ID | 
 **limit** | **Integer**| Number of items to retrieve | [optional] [default to 10]
 **offset** | **Integer**| Offset of the first item returned | [optional] [default to 0]
 **appKey** | **String**|  | [optional] 
 **appId** | **String**|  | [optional] 

### Return type

[**EntryChanges**](EntryChanges.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getListUpdates"></a>
# **getListUpdates**
> RegulatoryListChanges getListUpdates(releaseId, opts)

Get All List additions and removals released after release_id

Returns a **RegulatoryListChanges** object. 

### Example
```javascript
var ChemadvisorChemApi = require('chemadvisor-chemApi');

var apiInstance = new ChemadvisorChemApi.UpdatesApi();

var releaseId = "releaseId_example"; // String | Release ID

var opts = { 
  'limit': 10, // Integer | Number of items to retrieve
  'offset': 0, // Integer | Offset of the first item returned
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
apiInstance.getListUpdates(releaseId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **releaseId** | **String**| Release ID | 
 **limit** | **Integer**| Number of items to retrieve | [optional] [default to 10]
 **offset** | **Integer**| Offset of the first item returned | [optional] [default to 0]
 **appKey** | **String**|  | [optional] 
 **appId** | **String**|  | [optional] 

### Return type

[**RegulatoryListChanges**](RegulatoryListChanges.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

