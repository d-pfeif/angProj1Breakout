angular.module('inboxApp')
.controller('troll', toolbarfun)

function toolbarfun() {
  const vm = this;

  vm.test = function(mail) {
    console.log(mail);
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = true;
    }
  }

  vm.selectNone = function(mail) {
    console.log(mail);
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = false;
    }
  }

  vm.totalSelected = function(mail) {
    var countDooku = 0;
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == true) {
        countDooku++
      }
    }
    return countDooku
  }

  vm.allLabels = [
    {
      "id": 1,
      "label": "dev"
    },
    {
      "id": 2,
      "label": "personal"
    },
    {
      "id": 3,
      "label": "gschool"
    }
  ]

  vm.frodo = function(selected) {
    console.log(selected);
  }
}
