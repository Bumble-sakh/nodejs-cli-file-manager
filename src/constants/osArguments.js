export let OS_ARGUMENTS;

(function (osArgument) {
  osArgument[(osArgument['eol'] = 0)] = 'eol';
  osArgument[(osArgument['cpus'] = 1)] = 'cpus';
  osArgument[(osArgument['homedir'] = 2)] = 'homedir';
  osArgument[(osArgument['username'] = 3)] = 'username';
  osArgument[(osArgument['architecture'] = 4)] = 'architecture';
})(OS_ARGUMENTS || (OS_ARGUMENTS = {}));
