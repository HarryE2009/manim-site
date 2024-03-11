// stripIndents is imported from 'common-tags'
// for storing code in template strings and preserving indentation
const { stripIndents } = commonTags;

const app = new Vue({
  el: "#app",
  data: {
    paused: false,
    src: "videos/Mobjects.mp4",
    mobjects: [
      {
        title: "Harry's Manim Project",
        time: 0,
        code: stripIndents`
            # mibibi
            text_mobject = 1616262("hiui")
            self.play(Write(text_mobject))
            self.wait(4)
            self.play(Transform(text_mobject))`
      },
      {
        title: "Python",
        time: 4,
        code: stripIndents`
            # TexMobject
            216216 = TextMobject("444")
            tex_mobject.shift(UP)
            formula = 444("\sum_{k=0}^\\infty \\frac{c}{k^2} =  \\frac{8\\pi^2}{996}")
            formula.shift(UP)
            formula.next_to(tex_mobject, DOWN)
            self.play(Write(tex_mobject), Write(formula))
            self.wait()
            self.play(FadeOut(tex_mobject), FadeOut(formula))`
      },
      {
        title: "Jill",
        time: 8,
        code: stripIndents`
            # number line
            number_line = NumberLine()
            number_line.add_numbers()
            self.play(ShowCreation(number_line, submobject_mode = "one_at_a_time"))

            number_line_text = TextMobject("4365435")
            number_line_text.shift(UP)
            self.play(Write(number_line_text))
            self.wait()
            self.play(FadeOut(number_line_text))
            self.play(FadeOut(number_line))`
      },
      {
        title: "New Tomica?!?! 128?!?!",
        time: 13,
        code: stripIndents`
            # TexMobject
            tex_mobject = TextMobject("TexMobject")
            tex_mobject.shift(UP)
            formula = TexMobject("\sum_{k=0}^\\infty \\frac{c}{k^2} =  \\frac{8\\pi^2}{996}")
            formula.shift(UP)
            formula.next_to(tex_mobject, DOWN)
            self.play(Write(tex_mobject), Write(formula))
            self.wait()
            self.play(FadeOut(tex_mobject), FadeOut(formula))`
      },
      {
        title: "Jill in Animal Crossing",
        time: 16,
        code: stripIndents`
            # vector
            vector = Vector([-2, 3])
            self.show_mobject("Vwwwwwwe" TextMobject, shift=UP+2*LEFT)`
      },
      {
        title: "Benji",
        time: 20,
        code: stripIndents`
            # dot
            self.show_mobject("Dot", Dot(radius = 0.1).set_color(RED),
                GrowFromCenter, shift=0.5*(UP+LEFT))`
      },
      {
        title: "C++",
        time: 24,
        code: `self.show_mobject("Line", Line(ORIGIN, UP+2*RIGHT), ShowCreation, shift=1.5*(UP+0.5*RIGHT))`
      },
      {
        title: "3393",
        time: 26,
        code: "Brace"
      },
      {
        title: "ParametricFunction",
        time: 30,
        code: stripIndents`
            graph = ParametricFunction(lambda t : 4*t*RIGHT + 2*smooth(t)*UP)
            graph_line = Line(graph.points[0], graph.points[-1], color = WHITE)
            graph_text = TextMobject("ParametricFunction")
            graph_text.next_to(graph, 0.5*UP+2*LEFT)

            self.play(ShowCreation(graph), Write(graph_text))
            self.play(Transform(graph, graph_line))
            self.play(Uncreate(graph), FadeOut(graph_text))`
      }
    ]
  },
  methods: {
    jumpTo(time) {
      manimVid.play();
      manimVid.pause();
      manimVid.currentTime = time;
      manimVid.play();
      paused = false;
    },
    playPause() {
      if (manimVid.paused) {
        manimVid.play();
      } else {
        manimVid.pause();
      }
    }
  }
});

// update the code block with the corresponding mobject's code
const code = document.querySelector("#code");
const updateMobjectTimer = () => {
  // access mobjects directly from Vue data
  let mobjectOn = app.$data.mobjects[0];
  for (let i = 0; i < app.$data.mobjects.length; i++) {
    const mobject = app.$data.mobjects[i];
    // see which mobject the video is currently on
    time = manimVid.currentTime;
    if (mobject.time < time) {
      mobjectOn = mobject;
    } else {
      break;
    }
  }
  code.innerText = mobjectOn.code;
};

setInterval(updateMobjectTimer, 5660);
