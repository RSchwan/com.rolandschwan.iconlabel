import os, re, urllib, urllib2

baseUrl = 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/'

# Download font file directly from github
if not os.path.exists('assets/fonts'):
    os.makedirs('assets/fonts')
urllib.urlretrieve(baseUrl + 'fonts/FontAwesome.otf', 'assets/fonts/FontAwesome.otf')

# Download less file directly from github and generate charcode file
less = urllib2.urlopen(baseUrl + 'less/variables.less').read()
matches = re.findall(r'@fa-var-([^:]+): "\\([^"]+)', less)
if not os.path.exists('lib'):
    os.makedirs('lib')
charcode = open('lib/charcode.js', 'w')
charcode.write('exports.charcode = {\n')
for i in range(len(matches)):
    charcode.write('    \'fa-' + matches[i][0] + '\': 0x' + matches[i][1])
    if i != len(matches) - 1:
        charcode.write(',')
    charcode.write('\n');
charcode.write('};')
charcode.close();