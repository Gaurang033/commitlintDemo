module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: {
           parserOpts: {
              headerPattern: /^[A-Z]{1,4}-[0-9]{1,4}:\s(\w*)\s?(\w*)?:\s(.*)$/, // original
              //headerPattern: /^[A-Z]{1,4}-[0-9]{1,4}:\s(\w*)(\(\w*\))?:\s(.*)$/, // regex workign with regex tester
              headerCorrespondence: ["type", "scope", "subject"],
              issuePrefixes: ["^[A-Z]{1,4}-[0-9]{1,4}"],
              referenceActions: ["xxx-"] // (!!)
            }
      },
    rules: {
        'references-empty': [2, 'never'],
		'body-leading-blank': [1, 'always'],
		'body-max-line-length': [2, 'always', 100],
		'footer-leading-blank': [1, 'always'],
		'footer-max-line-length': [2, 'always', 100],
		'header-max-length': [2, 'always', 100],
		'scope-case': [2, 'always', 'lower-case'],
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case']
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		//'scope-empty': [1, 'never'],
		'scope-enum': [
            1,
            'always',
            [
                'adf',
                'trigger',
                'config',
                'notebook',
				'build',
                'logicapp',
                'azfunc',
                'file'
            ]
        ],
		'type-enum': [
			2,
			'always',
			[
				'add',
				'remove',
				'modify',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'test'
			]
		]
	}
};
