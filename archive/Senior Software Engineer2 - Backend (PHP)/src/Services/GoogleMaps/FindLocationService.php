<?php

namespace YouCan\Services\GoogleMaps;

use YouCan\Entities\Location\LocationCollection;

interface FindLocationService
{
    public function __construct(ApiService $apiService);

    /**
     * Search for a location using the Google Maps API.
     *
     * @param string $terms Terms to search with
     * @return LocationCollection
     *
     * @see https://developers.google.com/maps/documentation/places/web-service/search-text
     */
    public function searchLocation(string $terms): LocationCollection;
}
