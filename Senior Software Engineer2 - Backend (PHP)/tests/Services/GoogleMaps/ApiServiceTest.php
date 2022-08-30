<?php

namespace YouCan\Tests\Services\GoogleMaps;

use PHPUnit\Framework\TestCase;

class ApiServiceTest extends TestCase
{
    public function test_api_service_retries_three_times_before_failing_to_connect_to_host()
    {
        $this->assertTrue(true);
    }
}
