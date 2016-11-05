$(document).ready(function(){
    var canvas = this.getElementById("jogo");
    var telaJogo = canvas.getContext("2d");
    var btnNovoJogo = $("#btnNovoJogo");
    var btnPause = $("#btnPause");
    var colunas = 12;
    var linhas = 24;
    var tabuleiro = null;
    var peca;
    
    var Bloco = function(xi, yi, cori){

    };

    Bloco.corFundo = "#FFFFFF";
    Bloco.espaco = 1;
    Bloco.tamanho = 30;

    Bloco.pintar = function(context, x, y, corFrente){
        context.fillStyle = Bloco.corFundo;
        var x1 = x * Bloco.tamanho;
        var y1 = y * Bloco.tamanho;
        context.fillRect(x1, y1, Bloco.tamanho, Bloco.tamanho);
        context.fillStyle = corFrente;
        x1 = x1 + Bloco.espaco;
        y1 = y1 + Bloco.espaco;
        context.fillRect(x1, y1, Bloco.largura - Bloco.espaco * 2, Bloco.largura - Bloco.espaco * 2);
    };

        //o, i, j, l, t, u
    var f = false;
    var v = true;

    //peca quadrada
    var o = [
        [
            [f, f, f, f],
            [f, f, f, f],
            [v ,v ,f, f],
            [v ,v ,f, f]
        ]
    ];

    //peca reta
    var i = [
        [
            [v, f, f, f],
            [v, f, f, f],
            [v, f, f, f],
            [v, f, f, f]        
        ],
        [
            [f, f, f, f],
            [f, f, f, f],
            [f, f, f, f],
            [v, v, v, v]        
        ]

    ];

    //peca em formato de L invertido
    var j = [
        [
            [f, f, f, f],
            [f, v, f, f],
            [f, v, f, f],
            [v, v, f, f]
        ],
        [
            [f, f, f, f],
            [f, f, f, f],
            [v, v, v, f],
            [f, f, v, f]
        ],
        [
            [f, f, f, f],
            [v, v, f, f],
            [v, f, f, f],
            [v, f, f, f]
        ],
        [
            [f, f, f, f],
            [f, f, f, f],
            [v, f, f, f],
            [v, v, v, f]
        ]
    ];

    //peca em formato de L
    var l = [
        [
            [f, f, f, f],
            [v, f, f, f],
            [v, f, f, f],
            [v, v, f, f]
        ],
        [
            [f, f, f, f],
            [f, f, f, f],
            [f, f, v, f],
            [v, v, v, f]
        ],
        [
            [f, f, f, f],
            [v, v, f, f],
            [f, v, f, f],
            [f, v, f, f]
        ],
        [
            [f, f, f, f],
            [f, f, f, f],
            [v, v, v, f],
            [v, f, f, f]
        ]
    ];

    //peca em formato de T
    var t = [
        [
            [f, f, f, f],
            [f, f, f, f],
            [v, v, v, f],
            [f, v, f, f]
        ],
        [
            [f, f, f, f],
            [v, f, f, f],
            [v, v, f, f],
            [v, f, f, f]
        ],
        [
            [f, f, f, f],
            [f, f, f, f],
            [f, v, f, f],
            [v, v, v, f]
        ],
        [
            [f, f, f, f],
            [f, v, f, f],
            [v, v, f, f],
            [f, v, f, f]
        ]
    ];

    //peca ruim em formato de U
    var u = [
        [
            [f, f, f, f],
            [f, f, f, f],
            [v, f, v, f],
            [v, v, v, f]
        ],
        [
            [f, f, f, f],
            [v, v, f, f],
            [f, v, f, f],
            [v, v, f, f]
        ],
        [
            [f, f, f, f],
            [f, f, f, f],
            [v, v, v, f],
            [v, f, v, f]
        ],
        [
            [f, f, f, f],
            [v, v, f, f],
            [v, f, f, f],
            [v, v, f, f]
        ]
    ];

    var pecas = [o, i, j, l, t, u];

    var tabuleiro = function(linhas, colunas){
        tabuleiro = new Array(linhas);
        for(var i = 0; i < colunas; i++){
            tabuleiro[i] = new Array(colunas); 
        }
    };
    
    function limparTabuleiro(tabuleiro){
        for(var i = 0; i < linhas; i++){
            for(var j = 0; j < colunas; j++){
                tabuleiro[i][j] = null;
            }
        }
    }
    
    function novoJogo(){
        limparTabuleiro(tabuleiro);
        tabuleiro = new tabuleiro();

        btnNovoJogo.val('disabled', false);
        btnPause.val('disabled', false);
        btnPause.html("Iniciar");
    }
    
    
});