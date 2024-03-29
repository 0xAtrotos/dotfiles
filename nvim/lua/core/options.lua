-- [[ Setting options ]]
-- See `:help vim.o`

vim.notify = require("notify")

vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1

vim.opt.conceallevel = 2
vim.opt.concealcursor = 'nc'

vim.opt.tabstop = 4
vim.opt.shiftwidth = 4

-- Highlight current line
vim.opt.cursorline = true

-- Set highlight on search
vim.o.hlsearch = false

-- Make line numbers default
vim.wo.number = true

-- Enable relative line numbers
vim.o.relativenumber = true

-- Enable mouse mode
vim.o.mouse = 'a'

-- Enable break indent
vim.o.breakindent = true

-- Save undo history
vim.o.undofile = true

-- Case insensitive searching UNLESS /C or capital in search
vim.o.ignorecase = true
vim.o.smartcase = true

-- Decrease update time
vim.o.updatetime = 250
vim.wo.signcolumn = 'yes'

-- Set colorscheme
vim.o.termguicolors = true
vim.cmd [[colorscheme kanagawa]]

-- Set completeopt to have a better completion experience
vim.o.completeopt = 'menuone,noselect'

-- The line beneath this is called `modeline`. See `:help modeline`
-- vim: ts=2 sts=2 sw=2 et
vim.opt.title = true
vim.opt.clipboard = 'unnamedplus'

vim.o.foldcolumn = '1' -- '0' is not bad
vim.o.foldlevel = 99 -- Using ufo provider need a large value, feel free to decrease the value
vim.o.foldlevelstart = 99
vim.o.foldenable = true
