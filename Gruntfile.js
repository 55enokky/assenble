module.exports = function(grunt) {

  grunt.task.loadNpmTasks('assemble');

/* ==========================================================================
   タスク一覧
   ========================================================================== */
  grunt.initConfig({
    assemble: {

      //『 lesosn1 : YAMLとhandlebarsを用いてテンプレートを1つコンパイルしてみよう』
      len1: {
        options: {
          data: ['config.yml']
        },
        files: [
          {
            // ↓ src/pages/1.hbsをコンパイルしてdest/1.htmlに出力
            src: 'src/pages/1.hbs', // source file
            dest: 'dest1/1.html' // compile to
          }
        ]
      },

      //『 lesosn2 : 複数のファイルを同時にコンパイルしてみよう』
      len2: {
        options: {
          data: ['config.yml']
        },
        files: [
          {
            src: 'src/pages/1.hbs',
            dest: 'dest2/1.html'
          },
          {
            src: 'src/pages/2.hbs',
            dest: 'dest2/2.html'
          },
          {
            src: 'src/pages/3.hbs',
            dest: 'dest2/3.html'
          }
        ]
      },

      //『 lesosn3 : 拡張子.hbsがつく全てのファイルを対象にコンパイルしてみよう』
      len3: {
        options: {
          data: ['config.yml'],
          // ↓ flattenのオプションをtrueにする
          flatten: true
        },
        files: [
          {
            // ↓ src/pagesフォルダ配下にある、拡張子.hbsがつく全てのファイルを対象にする
            src: 'src/pages/*.hbs',
            dest: 'dest3/'
          }
        ]
      },

      //『 lesosn4 : ディレクトリ構造を保ったまま、コンパイル結果を出力してみよう』
      len4: {
        options: {
          data: ['config.yml']
        },
        files: [
          {
            // ↓ cwdなどの追加のオプションを指定する場合、expandを同時に指定する必要があります。
            expand: true,
            // ↓ ここに指定したディレクトリを基準に、srcに指定したファイルのパスを読み取ります。
            cwd: 'src/pages/',
            src: '**/*.hbs',
            dest: 'dest4/'
          }
        ]
      },

      //『 lesosn5 : partialsを使って、切り分けたheaderとfooterのファイルを読みこんでみよう』
      len5: {
        options: {
          data: ['config.yml'],
          // ↓ partialsオプションを付け加え、headerとfooterを読み込む
          partials: 'src/partials/**/*.hbs',
          flatten: true
        },
        files: [
          {
            // ↓ headerとfooterを取込む元のファイル
            src: 'src/pages_partials/*.hbs',
            dest: 'dest5/'
          }
        ]
      },

      //『 lesosn6 : YAML front matterでページ固有の変数を定義してみよう』
      len6: {
        options: {
          data: ['config.yml'],
          partials: 'src/partials/**/*.hbs',
          flatten: true
        },
        files: [
          {
            src: 'src/pages_YAML_front matter/*.hbs',
            dest: 'dest6/'
          }
        ]
      },

      //『 lesosn7 : layoutsで共通のレイアウトを定義してみよう』
      len7: {
        options: {
          data: ['config.yml'],
          // 新しくオプションにlayoutを追加
          layout: 'src/layouts/default.hbs',
          partials: 'src/partials/**/*.hbs',
          flatten: true
        },
        files: [
          {
            src: 'src/pages_layouts/*.hbs',
            dest: 'dest7/'
          }
        ]
      },

      //『 lesosn8 : helperのisを使ってみよう』
      len8_true: {
        options: {
          data: ['config.yml'],
          layout: 'src/layouts_helper/default_true.hbs',
          partials: 'src/partials/**/*.hbs',
          flatten: true
        },
        files: [
          {
            src: 'src/pages_layouts/*.hbs',
            dest: 'dest8_true/'
          }
        ]
      },

      len8_false: {
        options: {
          data: ['config.yml'],
          layout: 'src/layouts_helper/default_false.hbs',
          partials: 'src/partials/**/*.hbs',
          flatten: true
        },
        files: [
          {
            src: 'src/pages_layouts/*.hbs',
            dest: 'dest8_false/'
          }
        ]
      },

      //『 lesosn9 : テンプレートのデバッグをしてみよう』
      len9: {
        options: {
          data: ['config.yml'],
          flatten: true
        },
        files: [
          {
            src: 'src/pages_debug/*.hbs',
            dest: 'dest9/'
          }
        ]
      },

    } // assemble

  }); // grunt.initConfig

/* ==========================================================================
   タスク定義
   ========================================================================== */
  // ↓（'ターミナルで実行するコマンド名', ['実行したいgruntのタスク名']）
  grunt.registerTask('len1', ['assemble:len1']);
  grunt.registerTask('len2', ['assemble:len2']);
  grunt.registerTask('len3', ['assemble:len3']);
  grunt.registerTask('len4', ['assemble:len4']);
  grunt.registerTask('len5', ['assemble:len5']);
  grunt.registerTask('len6', ['assemble:len6']);
  grunt.registerTask('len7', ['assemble:len7']);
  grunt.registerTask('len8_true', ['assemble:len8_true']);
  grunt.registerTask('len8_false', ['assemble:len8_false']);
  grunt.registerTask('len9', ['assemble:len9']);

};
