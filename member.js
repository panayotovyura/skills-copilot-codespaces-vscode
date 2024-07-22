function skillsMember() {
  var member = document.getElementById('member');
  if (member) {
    var memberSkill = member.querySelectorAll('.member-skill');
    if (memberSkill.length > 0) {
      for (var i = 0; i < memberSkill.length; i++) {
        memberSkill[i].classList.add('js-member-skill');
      }
    }
  }
}