document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SELETOR XBOX / PS
  ========================= */
  const platformButtons = document.querySelectorAll(".platform");
  const platformGroups = document.querySelectorAll(".platform-group");

  platformButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      platformButtons.forEach(b => b.classList.remove("active"));
      platformGroups.forEach(g => g.classList.remove("active"));

      btn.classList.add("active");

      const platform = btn.dataset.platform;
      document.querySelector(`.${platform}-group`).classList.add("active");

      // render inicial da plataforma
      const activeGen = document
        .querySelector(`.${platform}-group .gen.active`)
        .dataset.gen;

      renderGallery(platform, activeGen);
    });
  });

  /* =========================
     BANCO DE DADOS
  ========================= */
  const games = {
    xbox: {
      x360: [
        { name: "AC Revelations", cover: "assets/x360/23.jpg", score: "800 / 1490 G" },
        { name: "AC Black Flag", cover: "assets/x360/22.jpg", score: "880 / 1250 G" },
        { name: "Cars 2", cover: "assets/x360/32.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "Cars 3", cover: "assets/x360/34.jpg", score: "820 / 1000 G" },
        { name: "Dead Rising 2", cover: "assets/x360/43.png", score: "840 / 1000 G", status: "completed"  },
        { name: "Dragon's Dogma: Dark Arisen", cover: "assets/x360/46.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "Ben 10 Ultimate Alien", cover: "assets/x360/28.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "Ben 10 Vilgax Attacks", cover: "assets/x360/27.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "Ben 10 Omiverse", cover: "assets/x360/26.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "Barbie Resgate de Cachorrinhos", cover: "assets/x360/25.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "DBZ Budokai HD", cover: "assets/x360/45.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "GRID 2", cover: "assets/x360/37.png", score: "1020 / 1250 G", status: "completed" },
        { name: "Naruto Storm Generations", cover: "assets/x360/62.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "The Peanuts Movie", cover: "assets/x360/0.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "Fable Anniversary", cover: "assets/x360/47.png", score: "980 / 1000 G", status: "completed" },
        { name: "Army of TWO: TDC", cover: "assets/x360/24.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "Bordelands Pre Sequel", cover: "assets/x360/29.png", score: "1355 / 1370 G", status: "completed" },
        { name: "Bordelands 2", cover: "assets/x360/31.png", score: "1625 / 1625 G", status: "perfect" },
        { name: "Bordelands", cover: "assets/x360/30.png", score: "1280 / 1750 G", status: "completed" },
        { name: "LEGO Batman ", cover: "assets/x360/3.png", score: "1000 / 1000 G", status: "perfect"},
        { name: "LEGO Batman 2", cover: "assets/x360/4.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "LEGO Batman 3", cover: "assets/x360/5.png", score: "1300 / 1300 G", status: "perfect" },
        { name: "LEGO Harry Potter 1", cover: "assets/x360/1.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "LEGO Harry Potter 2", cover: "assets/x360/2.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "LEGO Indiana Jones 1", cover: "assets/x360/10.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "LEGO Indiana Jones 2", cover: "assets/x360/11.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "LEGO Marvel Super Heroes", cover: "assets/x360/8.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "LEGO Marvel Vingadores", cover: "assets/x360/9.jpg", score: "1500 / 1500 G", status: "perfect" },
        { name: "LEGO Piratas do Caribe", cover: "assets/x360/6.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "LEGO Jurassic World", cover: "assets/x360/7.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "LEGO Star Wars II", cover: "assets/x360/14.jpg", score: "980 / 1000 G", status: "completed" },
        { name: "LEGO Star Wars III", cover: "assets/x360/16.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "LEGO Star Wars TCS", cover: "assets/x360/15.jpg", score: "700 / 1000 G" },
        { name: "LEGO Star Wars TFA", cover: "assets/x360/17.jpg", score: "1150 / 1150 G", status: "perfect" },
        { name: "LEGO O Hobbit", cover: "assets/x360/12.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "LEGO O Senhor dos Anéis", cover: "assets/x360/13.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "COD Modern Warfare 2", cover: "assets/x360/40.png", score: "880 / 1000 G", status: "completed" },
        { name: "WATCH DOGS", cover: "assets/x360/0.jpg", score: "880 / 1250 G" },
        { name: "RISE of Tomb Rider", cover: "assets/x360/0.jpg", score: "1670 / 1750 G" },
        { name: "Tomb Rider", cover: "assets/x360/0.jpg", score: "705 / 1000 G" },
        { name: "JUJU", cover: "assets/x360/21.png", score: "1000 / 1000 G", status: "perfect"  },
        { name: "Dark Souls", cover: "assets/x360/42.png", score: "1000 / 1000 G", status: "perfect"  },
        { name: "Just Cause 2", cover: "assets/x360/18.jpg", score: "1000 / 1000 G", status: "perfect"  },
        { name: "Toy Story 3", cover: "assets/x360/0.jpg", score: "1000 / 1000 G" },
        { name: "Bully", cover: "assets/x360/33.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "Mafia 2", cover: "assets/x360/56.png", score: "1490 / 1500 G" },
        { name: "Saints Rows IV", cover: "assets/x360/0.jpg", score: "1160 / 1200 G" },
        { name: "Saints Rows: The Third", cover: "assets/x360/0.jpg", score: "1260 / 1300 G" },
        { name: "Saints Rows: Gat out of Hell", cover: "assets/x360/0.jpg", score: "690 / 1000 G" },
        { name: "FH2: Fast & Furious", cover: "assets/x360/53.png", score: "1000 / 1000 G", status: "perfect"  },
        { name: "Forza Horizon", cover: "assets/x360/35.png", score: "1015 / 1500 G", status: "completed"  },
        { name: "Forza Horizon 2", cover: "assets/x360/36.png", score: "750 / 1000 G", status: "completed" },
        { name: "PVZ Garden Warfare", cover: "assets/x360/0.jpg", score: "795 / 1500 G" },
        { name: "Injustice", cover: "assets/x360/57.png", score: "580 / 1000 G" },
        { name: "Sleeping Dogs", cover: "assets/x360/0.jpg", score: "1000 / 1225 G" },
        { name: "Sonic Transformed", cover: "assets/x360/0.jpg", score: "485 / 1000 G" },
        { name: "Crackdown 2", cover: "assets/x360/41.png", score: "520 / 1500 G" },
        { name: "TEKKEN TAG 2", cover: "assets/x360/0.jpg", score: "750 / 1000 G" },
        { name: "DIRT 3", cover: "assets/x360/44.png", score: "815 / 1250 G", status: "completed" },
        { name: "Family Guy: BTTM", cover: "assets/x360/50.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "Super Hero Squad: TIG", cover: "assets/x360/0.jpg", score: "1500 / 1500 G" },
        { name: "PAC MAN Aventura Fastasmagorica", cover: "assets/x360/63.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "Medal of Honor", cover: "assets/x360/55.png", score: "500 / 1000 G", status: "completed" },
        { name: "Far Cry 4", cover: "assets/x360/52.png", score: "1170 / 1250 G", status: "completed"},
        { name: "007: Blood Stone", cover: "assets/x360/20.png", score: "825 / 1000 G", status: "completed"  },
        { name: "Minecraft: Story Mode", cover: "assets/x360/58.png", score: "1375 / 1370 G", status: "perfect" },
        { name: "Minecraft: Story Mode 2", cover: "assets/x360/59.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "MINI NINJAS", cover: "assets/x360/60.png", score: "1000 / 1000 G", status: "perfect" },
        { name: "TTG Bordelands", cover: "assets/x360/0.jpg", score: "1000 / 1000 G", status: "perfect" },
        { name: "Walking Dead: Michonne", cover: "assets/x360/0.jpg", score: "1000 / 1000 G", status: "perfect" },

        { name: "Torchlight", cover: "assets/x360/0.jpg", score: "200 / 200 G", status: "perfect" },
        { name: "The Wolf Among Us", cover: "assets/x360/0.jpg", score: "500 / 500 G", status: "perfect" },
        { name: "Costume Quest", cover: "assets/x360/48.png", score: "200 / 250 G" },
        { name: "Far Cry 3 Blood Dragon", cover: "assets/x360/51.png", score: "400 / 400 G", status: "perfect" },
        { name: "Virtua Fighter 5 FS", cover: "assets/x360/0.jpg", score: "400 / 400 G", status: "perfect" },
        { name: "Virtua Fighter 2", cover: "assets/x360/0.jpg", score: "400 / 400 G" , status: "perfect"},
        { name: "Fable Heroes", cover: "assets/x360/49.png", score: "370 / 400 G" },
        { name: "Harm's Way", cover: "assets/x360/54.png", score: "190 / 200 G", status: "completed"},
        { name: "Joy Ride Turbo", cover: "assets/x360/19.png", score: "200 / 200 G", status: "perfect"},
        { name: "PAC MAN CE DX", cover: "assets/x360/0.jpg", score: "200 / 200 G" , status: "perfect"},
        { name: "PAC MAN C.E.", cover: "assets/x360/0.jpg", score: "200 / 200 G" , status: "perfect"},
        { name: "Motocross Madness", cover: "assets/x360/61.png", score: "455 / 500 G", status: "completed"},
        { name: "Soul Calibur", cover: "assets/x360/0.jpg", score: "200 / 200 G", status: "perfect"},
        { name: "AC Liberation HD", cover: "assets/x360/39.png", score: "400 / 400 G", status: "perfect"},
        { name: "Child of Light", cover: "assets/x360/38.png", score: "390 / 400 G", status: "completed"},
        
      ],
      xone: [
        { name: "LEGO Avengers", cover: "assets/xone/lego-avengers.jpg" }
      ],
      xseries: [
        { name: "LEGO Star Wars Skywalker Saga", cover: "assets/xseries/lego-saga.jpg" }
      ]
    },

    ps: {
      ps3: [
        { name: "The Last of Us", cover: "assets/ps3/tlou.jpg" }
      ],
      ps4: [
        { name: "LEGO Marvel Super Heroes", cover: "assets/ps4/lego-marvel.jpg" }
      ],
      ps5: [
        { name: "Spider-Man 2", cover: "assets/ps5/spiderman2.jpg" }
      ]
    }
  };

  /* =========================
     RENDER GALERIA
  ========================= */
    function renderGallery(platform, gen, filter = "") {
    const gallery = document.querySelector(`.${platform}-group .game-gallery`);
    gallery.innerHTML = "";

    games[platform][gen]
        .filter(game =>
            game.name.toLowerCase().includes(filter.toLowerCase())
        )
        .sort((a, b) =>
            a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" })
        )
        .forEach(game => {

        const card = document.createElement("div");
        card.className = "game-card";

        // aplica status visual (gold / silver)
        if (game.status === "perfect") {
        card.classList.add("perfect");
        } else if (game.status === "completed") {
        card.classList.add("completed");
        }

        const cover = document.createElement("div");
        cover.className = "game-cover";
        cover.style.backgroundImage = `url(${game.cover})`;

        card.appendChild(cover);

        const info = document.createElement("div");
        info.className = "game-info";

        const title = document.createElement("div");
        title.className = "game-title";
        title.textContent = game.name;

        const score = document.createElement("div");
        score.className = "game-score";
        score.textContent = game.score || "1000 / 1000 G";

        info.appendChild(title);
        info.appendChild(score);
        card.appendChild(info);

        gallery.appendChild(card);
        });
    }

  /* =========================
     TROCA DE GERAÇÃO
  ========================= */
  document.querySelectorAll(".gen").forEach(gen => {
    gen.addEventListener("click", () => {
      const group = gen.closest(".platform-group");

      group.querySelectorAll(".gen").forEach(g =>
        g.classList.remove("active")
      );

      gen.classList.add("active");

      const platform = group.classList.contains("xbox-group")
        ? "xbox"
        : "ps";

      renderGallery(platform, gen.dataset.gen);
    });
  });

  /* =========================
     BUSCA
  ========================= */
  document.querySelectorAll(".search-box input").forEach(input => {
    input.addEventListener("input", () => {
      const group = input.closest(".platform-group");
      const platform = group.classList.contains("xbox-group")
        ? "xbox"
        : "ps";
      const gen = group.querySelector(".gen.active").dataset.gen;

      renderGallery(platform, gen, input.value);
    });
  });

  /* =========================
     RENDER INICIAL
  ========================= */
  renderGallery("xbox", "x360");

  function updateFooterStats() {
    let xboxCount = 0;
    let psCount = 0;

    Object.values(games.xbox).forEach(gen => {
        xboxCount += gen.length;
    });

    Object.values(games.ps).forEach(gen => {
        psCount += gen.length;
    });

    document.getElementById("count-xbox").textContent = xboxCount;
    document.getElementById("count-ps").textContent = psCount;
  }

  updateFooterStats();

});



