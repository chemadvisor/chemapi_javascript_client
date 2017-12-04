# ChemadvisorChemApi.SubstancesApi

All URIs are relative to *https://sandbox.chemadvisor.io/chem/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRelatedSubstances**](SubstancesApi.md#getRelatedSubstances) | **GET** /substances/{substance_id}/related_substances | Links to related substances
[**getSubstance**](SubstancesApi.md#getSubstance) | **GET** /substances/{substance_id} | Find substance by ID
[**getSubstanceIdentifiers**](SubstancesApi.md#getSubstanceIdentifiers) | **GET** /substances/{substance_id}/identifiers | A substance&#39;s public identifiers
[**getSubstanceInventoryHits**](SubstancesApi.md#getSubstanceInventoryHits) | **GET** /substances/{substance_id}/inventories | A substance&#39;s inventory status
[**getSubstanceListHits**](SubstancesApi.md#getSubstanceListHits) | **GET** /substances/{substance_id}/regulatory_lists | LOLI lists containing this substance
[**getSubstanceNames**](SubstancesApi.md#getSubstanceNames) | **GET** /substances/{substance_id}/names | Get a Specific Substance&#39;s names
[**getSubstances**](SubstancesApi.md#getSubstances) | **GET** /substances | All Substances


<a name="getRelatedSubstances"></a>
# **getRelatedSubstances**
> RelatedSubstances getRelatedSubstances(substanceId, opts)

Links to related substances

Returns a collection of links to related substances

### Example
```javascript
var ChemadvisorChemApi = require('chemadvisor-chemApi');

var apiInstance = new ChemadvisorChemApi.SubstancesApi();

var substanceId = "substanceId_example"; // String | Substance id

var opts = { 
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
apiInstance.getRelatedSubstances(substanceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substanceId** | **String**| Substance id | 
 **appKey** | **String**|  | [optional] 
 **appId** | **String**|  | [optional] 

### Return type

[**RelatedSubstances**](RelatedSubstances.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getSubstance"></a>
# **getSubstance**
> Substance getSubstance(substanceId, opts)

Find substance by ID

Returns a single substance

### Example
```javascript
var ChemadvisorChemApi = require('chemadvisor-chemApi');

var apiInstance = new ChemadvisorChemApi.SubstancesApi();

var substanceId = "substanceId_example"; // String | Substance id

var opts = { 
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
apiInstance.getSubstance(substanceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substanceId** | **String**| Substance id | 
 **appKey** | **String**|  | [optional] 
 **appId** | **String**|  | [optional] 

### Return type

[**Substance**](Substance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getSubstanceIdentifiers"></a>
# **getSubstanceIdentifiers**
> Identifiers getSubstanceIdentifiers(substanceId, opts)

A substance&#39;s public identifiers

Returns a collection of public identifiers for a substance.

### Example
```javascript
var ChemadvisorChemApi = require('chemadvisor-chemApi');

var apiInstance = new ChemadvisorChemApi.SubstancesApi();

var substanceId = "substanceId_example"; // String | Substance id

var opts = { 
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
apiInstance.getSubstanceIdentifiers(substanceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substanceId** | **String**| Substance id | 
 **appKey** | **String**|  | [optional] 
 **appId** | **String**|  | [optional] 

### Return type

[**Identifiers**](Identifiers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getSubstanceInventoryHits"></a>
# **getSubstanceInventoryHits**
> Inventories getSubstanceInventoryHits(substanceId, opts)

A substance&#39;s inventory status

Returns a collection of inventory objects for a substance

### Example
```javascript
var ChemadvisorChemApi = require('chemadvisor-chemApi');

var apiInstance = new ChemadvisorChemApi.SubstancesApi();

var substanceId = "substanceId_example"; // String | Substance id

var opts = { 
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
apiInstance.getSubstanceInventoryHits(substanceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substanceId** | **String**| Substance id | 
 **appKey** | **String**|  | [optional] 
 **appId** | **String**|  | [optional] 

### Return type

[**Inventories**](Inventories.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getSubstanceListHits"></a>
# **getSubstanceListHits**
> RegulatoryLists getSubstanceListHits(substanceId, opts)

LOLI lists containing this substance

Returns a paginated collection of list objects for lists contain this substance

### Example
```javascript
var ChemadvisorChemApi = require('chemadvisor-chemApi');

var apiInstance = new ChemadvisorChemApi.SubstancesApi();

var substanceId = "substanceId_example"; // String | Substance ID

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
apiInstance.getSubstanceListHits(substanceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substanceId** | **String**| Substance ID | 
 **limit** | **Integer**| Number of items to retrieve | [optional] [default to 10]
 **offset** | **Integer**| Offset of the first item returned | [optional] [default to 0]
 **q** | **String**| Search filter is based on the syntax used for find in mongoDB.  For more information, visit &lt;a href&#x3D;\&quot;https://developer.chemadvisor.io/docs/integrate/codeExamplesQ\&quot; target&#x3D;\&quot;blank\&quot;&gt;https://developer.chemadvisor.io/docs/integrate/codeExamplesQ&lt;/a&gt;. | [optional] 
 **appKey** | **String**|  | [optional] 
 **appId** | **String**|  | [optional] 

### Return type

[**RegulatoryLists**](RegulatoryLists.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getSubstanceNames"></a>
# **getSubstanceNames**
> SubstanceNames getSubstanceNames(substanceId, opts)

Get a Specific Substance&#39;s names

Gets a collection of **name** objects Required path param of &#39;substance_id&#39; 

### Example
```javascript
var ChemadvisorChemApi = require('chemadvisor-chemApi');

var apiInstance = new ChemadvisorChemApi.SubstancesApi();

var substanceId = "substanceId_example"; // String | Identifier for the substance

var opts = { 
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
apiInstance.getSubstanceNames(substanceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **substanceId** | **String**| Identifier for the substance | 
 **appKey** | **String**|  | [optional] 
 **appId** | **String**|  | [optional] 

### Return type

[**SubstanceNames**](SubstanceNames.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getSubstances"></a>
# **getSubstances**
> Substances getSubstances(opts)

All Substances

A paginated collection of substances

### Example
```javascript
var ChemadvisorChemApi = require('chemadvisor-chemApi');

var apiInstance = new ChemadvisorChemApi.SubstancesApi();

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
apiInstance.getSubstances(opts, callback);
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

[**Substances**](Substances.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

