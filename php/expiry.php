<?php
  $arr = array(
      'state' => '1',
      'giftID' => '3'
  );

	//state 0 表示已经兑过奖了  1 表示兑奖成功   2表示兑奖过期了     测试的时候可以直接修改数值，测试效果

  $json_string = json_encode($arr);

    echo $json_string;

?>