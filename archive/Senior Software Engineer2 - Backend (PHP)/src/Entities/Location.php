<?php

namespace YouCan\Entities\Location;

class Location
{
    private string $address;
    private float $lat;
    private float $lng;
    private string $placeID;

    public function __construct(string $address, float $lat, float $lng, string $placeID)
    {
        $this->address = $address;
        $this->lat = $lat;
        $this->lng = $lng;
        $this->placeID = $placeID;
    }

    public function getAddress(): string
    {
        return $this->address;
    }

    public function getLat(): float
    {
        return $this->lat;
    }

    public function getLng(): float
    {
        return $this->lng;
    }

    public function getPlaceID(): string
    {
        return $this->placeID;
    }
}
