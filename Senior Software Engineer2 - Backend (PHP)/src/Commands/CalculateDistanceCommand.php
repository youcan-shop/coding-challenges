<?php

namespace YouCan\Commands;

use Illuminate\Console\Command;
use YouCan\Entities\Location\Location;
use YouCan\Services\DistanceCalculator\CalculateDistanceService;
use YouCan\Services\GoogleMaps\FindLocationService;

class CalculateDistanceCommand extends Command
{
    protected $name = "calculate-distance";

    protected $description = "Command to calculate the distance between two places.";

    private CalculateDistanceService $calculateDistanceService;
    private FindLocationService $findLocationService;

    public function __construct(
        CalculateDistanceService $calculateDistanceService,
        FindLocationService      $findLocationService
    )
    {
        parent::__construct();

        $this->calculateDistanceService = $calculateDistanceService;
        $this->findLocationService = $findLocationService;
    }

    public function handle()
    {
        $firstLocation = $this->getLocation();
        $secondLocation = $this->getLocation();

        $distance = $this->calculateDistanceService->calculateDistanceInKM($firstLocation, $secondLocation);

        $this->info(
            sprintf(
                "The distance between `%s` and `%s` is `%s` Km",
                $firstLocation->getAddress(),
                $secondLocation->getAddress(),
                $distance
            )
        );
    }

    public function getLocation(): Location
    {
        $terms = (string)$this->ask("Search for a location: ");
        $locations = $this->findLocationService->searchLocation($terms);

        // TODO: fill the choices
        $choices = [];

        $selectedPlaceId = $this->askWithCompletion("Here's what I found: ", $choices);

        // TODO: Get the selected location object using the selectedPlaceId
        $selectedLocation = null;

        return $selectedLocation;
    }
}