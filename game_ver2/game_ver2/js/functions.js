const audio = document.getElementById("audio");

$(document).on("mousemove", (e) => {
  basket.css("left", e.pageX);
});

function move_egg(egg) {
  egg_current_position = parseInt(egg.css("top"));
  egg.css("top", egg_current_position + speed);
}

const check_egg_breaks = (egg) => {
  if (collision_detection(egg, floor)) {
    show_break_egg(egg);
    decr_life();
    return true;
  } else {
    return false;
  }
};

const reload_eggs = (egg) => {
  egg.css("top", egg_initial_position);
};

const show_break_egg = (egg) => {
  bullseye_num = egg.attr("data-bullseye");
  $("#bullseye" + bullseye_num).show();
  hide_break_egg(bullseye_num);
};

const hide_break_egg = (bullseye_num) => {
  setTimeout(() => {
    $("#bullseye" + bullseye_num).hide();
  }, 800);
};

function decr_life() {
  life--;
  life_span.text(life);
}

const check_egg_in_basket = (egg) => {
  if (collision_detection(egg, basket)) {
    egg_top = parseInt(egg.css("top"));

    if (egg_top < basket_top) {
      audio.play();
      update_score();
      return true;
    }
  } else {
    return false;
  }
};

function update_score() {
  score++;
  if (score % 10 === 0 && speed <= max_speed) speed++;
  score_span.text(score);
  score_1.text(score);
}

const stop_game = () => {
  cancelAnimationFrame(animation);
  restart.slideDown();
};

restart.click(() => {
  location.reload();
});
