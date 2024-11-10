<?php

namespace YouCan\Entities\Location;

class LocationCollection
{
    public static function createFromArray(array $attributes): self
    {
        // create from Google Maps response payload

        return new self();
    }
}
