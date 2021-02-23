<?php

class Share
{
    // Request
    public $Title;
    public $Description;
    public $Pic;

    // og meta
    public $width;
    public $height;
    public $title;
    public $description;
    public $image;

    public $site_root;
    public $url;

    function __construct() {
        // $this->Title = filter_input(INPUT_GET, 'Title');
        // $this->Description = filter_input(INPUT_GET, 'Description');
        $this->Title = '即刻踏上川見療癒食刻之旅';
        $this->Description = '玩就抽100名送超美味鱈蟹柳到你家';
        $this->Pic = filter_input(INPUT_GET, 'Pic', FILTER_VALIDATE_INT);
        $this->site_root = 'https://www.cheerfoodscampaign.com.tw';
    }

    public function main()
    {
        $this->url = "https://www.cheerfoodscampaign.com.tw/?utm_source=fb&utm_medium=fbshare".$this->Pic;
        $this->setFBmeta();

        include 'SharePage.php';
    }

    public function setFBmeta()
    {
        $this->width = 1200;
        $this->height = 630;

        $this->title = $this->Title;
        $this->description = $this->Description;
        $this->image = $this->site_root.'/images/share/share_'.$this->Pic.'.jpg?t='.time();
    }
}

$api = new Share();
$api->main();
