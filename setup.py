import os
from setuptools import setup

def package_data(pkg, roots):
    """Generic function to find package_data."""
    data = []
    for root in roots:
        for dirname, _, files in os.walk(os.path.join(pkg, root)):
            for fname in files:
                data.append(os.path.relpath(os.path.join(dirname, fname), pkg))
    return {pkg: data}

setup(
    name='la-multi-quiz-xblock',
    version='0.1.0',
    description='L&A Multiple Choice Quiz XBlock — Trắc nghiệm nhiều đáp án với ảnh carousel và video YouTube.',
    packages=[
        'la_multi_quiz',
    ],
    install_requires=[
        'XBlock',
    ],
    entry_points={
        'xblock.v1': [
            'la_multi_quiz = la_multi_quiz.la_multi_quiz:MultiQuizXBlock',
        ]
    },
    package_data=package_data("la_multi_quiz", ["static", "public"]),
)
